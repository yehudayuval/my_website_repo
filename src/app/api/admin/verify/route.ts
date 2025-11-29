import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
  try {

    let token = request.cookies.get('adminToken')?.value ?? null;

    // fallback: parse Cookie header (some runtimes / proxies)
    if (!token) {
      const cookieHeader = request.headers.get('cookie') ?? '';
      const m = cookieHeader.match(/(?:^|;\s*)adminToken=([^;]+)/);
      token = m ? decodeURIComponent(m[1]) : null;
    }


    if (!token) {
      console.debug('verifyAdminToken: adminToken cookie not found');
      return NextResponse.json(
        { success: false, error: 'לא מחובר כאדמין' },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;

    return NextResponse.json({
      success: true,
      admin: {
        email: decoded.email,
        isAdmin: decoded.isAdmin
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'טוקן לא תקין' },
      { status: 401 }
    );
  }
}