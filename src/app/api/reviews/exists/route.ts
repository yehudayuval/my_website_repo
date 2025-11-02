import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  try {
    const { rows } = await pool.query<{ exists: boolean }>(
      `SELECT EXISTS (SELECT 1 FROM reviews LIMIT 1) AS exists;`
    );

    return NextResponse.json({ hasReviews: rows[0]?.exists ?? false });
  } catch (error) {
    console.error('Review exists check failed:', error);
    return NextResponse.json({ hasReviews: false }, { status: 500 });
  }
}