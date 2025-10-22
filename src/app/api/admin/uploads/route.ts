import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import {  readdir, unlink } from 'fs/promises';
import { verifyAdminToken } from '@/lib/auth';
import { pool } from '@/lib/db';
import { isAllowedFileType, uploadFile, isVideo, isImage, uploadsDir } from '@/lib/uploadImages';





export async function GET(request: NextRequest) {
    const admin = verifyAdminToken(request);
    if (!admin) return NextResponse.json({ success: false, error: 'לא מחובר כאדמין' }, { status: 401 });

    try {
        const entries = await readdir(uploadsDir, { withFileTypes: true });
        const images = entries
            .filter((e) => e.isFile() && isImage(e.name))
            .map((e) => ({ filename: e.name, url: `/${e.name}` }));
        const videos = entries
            .filter((e) => e.isFile() && isVideo(e.name))
            .map((e) => ({ filename: e.name, url: `/${e.name}` }));
        return NextResponse.json({ success: true, images, videos });
    } catch (e) {
        console.error('List uploads error:', e);
        return NextResponse.json({ success: false, error: 'שגיאה בטעינת התמונות' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    // Verify admin authentication
    const admin = verifyAdminToken(request);
    if (!admin) {
        return NextResponse.json(
            { success: false, error: 'לא מחובר כאדמין' },
            { status: 401 }
        );
    }

    try {
        const formData = await request.formData();
        const file = formData.get('image') as File;

        if (!file) {
            return NextResponse.json(
                { success: false, error: 'לא נבחר קובץ' },
                { status: 400 }
            );
        }

        
        if (!isAllowedFileType(file.name)) {
            return NextResponse.json(
                { success: false, error: 'סוג הקובץ לא נתמך' },
                { status: 400 }
            );
        }

        const filename = await uploadFile(file);

        return NextResponse.json({
            success: true,
            filename,
            originalName: file.name,
            message: 'הקובץ הועלה בהצלחה'
        });

    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { success: false, error: 'שגיאה בהעלאת התמונה' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    const admin = verifyAdminToken(request);
    if (!admin) return NextResponse.json({ success: false, error: 'לא מחובר כאדמין' }, { status: 401 });

    try {
        const body = await request.json().catch(() => ({}));
        const filenames: string[] = Array.isArray(body?.filenames) ? body.filenames : [];
        if (!filenames.length) {
            return NextResponse.json({ success: false, error: 'אין קבצים למחיקה' }, { status: 400 });
        }

        const deleted: string[] = [];
        for (const name of filenames) {
          const safe = path.basename(name);
          const target = path.join(uploadsDir, safe);
          try {
            await unlink(target);
            await pool.query(
              'UPDATE reviews SET image_filename = NULL WHERE image_filename = $1',
              [safe],
            );
            deleted.push(safe);
          } catch {
            //TODO: ignore missing
          }
        }
        return NextResponse.json({ success: true, deleted });
    } catch (e) {
        console.error('Delete uploads error:', e);
        return NextResponse.json({ success: false, error: 'שגיאה במחיקת תמונות' }, { status: 500 });
    }
}