import { NextRequest, NextResponse } from 'next/server'
import { rateLimiter } from './lib/limiter'
import { getUserIP } from './lib/ip'

const allowedOrigins = [process.env.NEXT_PUBLIC_BASE_URL || ''];

export const config = { matcher: ['/api/:path*'] }

export async function proxy(req: NextRequest) {
  const ip = await getUserIP();
  try {
    await rateLimiter.consume(ip);
  } catch (error) {
    return NextResponse.json(
      { error: 'Too Many Requests' },
      { status: 429 },
    );
  }

  if (req.nextUrl.pathname === '/api/admin/login') {
    const origin = req.headers.get('origin') || '';
    const isAllowed = allowedOrigins.includes(origin);
    if (!isAllowed) {
      return NextResponse.json(
        { error: 'Origin not allowed' },
        { status: 403 },
      );
    }
  }

  return NextResponse.next();
}