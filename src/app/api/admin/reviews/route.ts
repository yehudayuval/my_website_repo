import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/auth';
import { isAllowedFileType, uploadFile } from '@/lib/uploadImages';
import { pool } from '@/lib/db';
import { revalidateTag } from 'next/cache';


export async function POST(request: NextRequest) {
  // Verify admin authentication
  const admin = verifyAdminToken(request);
  if (!admin) {
    return NextResponse.json(
      { success: false, error: 'לא מחובר כאדמין' },
      { status: 401 }
    );
  }

  let name: string | null = null;
  let rating: number | null = null;
  let content: string | null = null;
  let imageFilename: string | null = null;
  let file: File | null = null;
  try {
    const form = await request.formData();

    if (form.has('image')) {

      name = (form.get('name') as string) || null;
      rating = form.get('rating') != null ? Number(form.get('rating')) : null;
      content = (form.get('content') as string) || null;
      file = form.get('image') as File;

    } else {
      const body = await request.json().catch(() => ({}));
      name = body?.name ?? null;
      rating = typeof body?.rating === 'number' ? body.rating : Number(body?.rating ?? null);
      content = body?.content ?? null;
    }

    if (!name || !rating || !content) {
      return NextResponse.json(
        { success: false, error: 'דירוג, תוכן ושם הם שדות חובה' },
        { status: 400 }
      );
    }

    if (Number.isNaN(rating) || rating < 1 || rating > 5) {
      return NextResponse.json(
        { success: false, error: 'דירוג חייב להיות בין 1 ל-5' },
        { status: 400 }
      );
    }

    if (content.length < 10) {
      return NextResponse.json(
        { success: false, error: 'תוכן הביקורת חייב להיות לפחות 10 תווים' },
        { status: 400 }
      );
    }

    if (file && isAllowedFileType(file.name)) {
      imageFilename = await uploadFile(file);
    }else if (file) {
      return NextResponse.json(
        { success: false, error: 'סוג הקובץ לא נתמך' },
        { status: 400 }
      );
    }

    const result = await pool.query(
      'INSERT INTO reviews (name, rating, content, image_filename) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, rating, content, imageFilename]
    );

    revalidateTag('reviews', "max");

    return NextResponse.json({
      success: true,
      review: result.rows[0],
      message: 'הביקורת נוספה בהצלחה'
    });
  } catch (error) {
    console.error('Add review error:', error);
    return NextResponse.json(
      { success: false, error: 'שגיאה בהוספת הביקורת' },
      { status: 500 }
    );
  }
}