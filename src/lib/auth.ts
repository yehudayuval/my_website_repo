import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function verifyAdminToken(request: NextRequest) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    console.error('verifyAdminToken: missing JWT_SECRET');
    return null;
  }

  // preferred API
  let token = request.cookies.get('adminToken')?.value ?? null;

  // fallback: parse Cookie header (some runtimes / proxies)
  if (!token) {
    const cookieHeader = request.headers.get('cookie') ?? '';
    const m = cookieHeader.match(/(?:^|;\s*)adminToken=([^;]+)/);
    token = m ? decodeURIComponent(m[1]) : null;
  }

  if (!token) {
    console.debug('verifyAdminToken: adminToken cookie not found');
    return null;
  }

  try {
    const decoded = jwt.verify(token, secret) as any;
    return decoded;
  } catch (err: any) {
    console.error('verifyAdminToken: token verify failed:', err?.message ?? err);
    return null;
  }
}