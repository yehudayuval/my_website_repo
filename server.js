const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3001;

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for development
}));
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? 'https://yourwebsite.com' : 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const extension = path.extname(file.originalname);
    const fileName = `${timestamp}${extension}`;
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('רק קבצי תמונה מותרים (JPEG, PNG, GIF, WebP)'));
    }
  },
});

// Middleware to verify admin authentication
const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.adminToken;
    
    if (!token) {
      return res.status(401).json({ error: 'לא מחובר כאדמין' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'טוקן לא תקין' });
  }
};
// TODO: delete this file and keep initDatabase function in a separate db.js file
// Initialize database tables
async function initDatabase() {
  try {
    // ensure pgcrypto is available for gen_random_uuid()
    await pool.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
        content TEXT NOT NULL,
        image_filename VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Database tables initialized');
  } catch (error) {
    console.error('❌ Error initializing database:', error);
  }
}

// Routes

// Admin login
app.post('/api/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'אימייל או סיסמה שגויים' });
    }
    
    const token = jwt.sign(
      { email, isAdmin: true },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.cookie('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });
    
    res.json({ success: true, message: 'התחברות בוצעה בהצלחה' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'שגיאה בהתחברות' });
  }
});

// Admin logout
app.post('/api/admin/logout', (req, res) => {
  res.clearCookie('adminToken');
  res.json({ success: true, message: 'התנתקות בוצעה בהצלחה' });
});

// Check admin authentication
app.get('/api/admin/verify', verifyAdmin, (req, res) => {
  res.json({ success: true, admin: req.admin });
});

// Upload image (admin only)
app.post('/api/admin/upload', verifyAdmin, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'לא נבחר קובץ' });
    }
    
    res.json({
      success: true,
      filename: req.file.filename,
      originalName: req.file.originalname,
      message: 'התמונה הועלתה בהצלחה'
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'שגיאה בהעלאת התמונה' });
  }
});

// Add review (admin only)
app.post('/api/admin/reviews', verifyAdmin, async (req, res) => {
  try {
    const { rating, content, image_filename } = req.body;
    
    if (!rating || !content) {
      return res.status(400).json({ error: 'דירוג ותוכן הם שדות חובה' });
    }
    
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'דירוג חייב להיות בין 1 ל-5' });
    }
    
    const result = await pool.query(
      'INSERT INTO reviews (rating, content, image_filename) VALUES ($1, $2, $3) RETURNING *',
      [rating, content, image_filename || null]
    );
    
    res.json({
      success: true,
      review: result.rows[0],
      message: 'הביקורת נוספה בהצלחה'
    });
  } catch (error) {
    console.error('Add review error:', error);
    res.status(500).json({ error: 'שגיאה בהוספת הביקורת' });
  }
});

// Get all reviews (public)
app.get('/api/reviews', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM reviews ORDER BY created_at DESC'
    );
    
    res.json({
      success: true,
      reviews: result.rows
    });
  } catch (error) {
    console.error('Get reviews error:', error);
    res.status(500).json({ error: 'שגיאה בטעינת הביקורות' });
  }
});

// Delete review (admin only)
app.delete('/api/admin/reviews/:id', verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    
    // Get the review to delete associated image file
    const review = await pool.query('SELECT * FROM reviews WHERE id = $1', [id]);
    
    if (review.rows.length === 0) {
      return res.status(404).json({ error: 'ביקורת לא נמצאה' });
    }
    
    // Delete image file if exists
    if (review.rows[0].image_filename) {
      const imagePath = path.join(uploadsDir, review.rows[0].image_filename);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    
    // Delete from database
    await pool.query('DELETE FROM reviews WHERE id = $1', [id]);
    
    res.json({
      success: true,
      message: 'הביקורת נמחקה בהצלחה'
    });
  } catch (error) {
    console.error('Delete review error:', error);
    res.status(500).json({ error: 'שגיאה במחיקת הביקורת' });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'קובץ גדול מדי. מקסימום 5MB' });
    }
  }
  
  console.error('Server error:', error);
  res.status(500).json({ error: error.message || 'שגיאה בשרת' });
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Express server running on port ${PORT}`);
  await initDatabase();
});

module.exports = app;