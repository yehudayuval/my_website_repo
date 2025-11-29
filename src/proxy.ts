import { NextRequest, NextResponse } from 'next/server'
import { rateLimiter } from './lib/limiter'
import { getUserIP } from './lib/ip'
import { headers } from "next/headers";


const allowedOrigins = [process.env.NEXT_PUBLIC_BASE_URL || '', '::1']


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

  const headersList = await headers();
  const origin = headersList.get('origin') || '';
  const isAllowed = allowedOrigins.includes(origin);
  
  if (!isAllowed) {
    return NextResponse.json(
      { error: 'Origin not allowed' },
      { status: 403 },
    );
  }

  return NextResponse.next();
}
