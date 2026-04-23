import { auth } from '@/auth';
import { NextResponse } from 'next/server';

const PROTECTED = ['/dashboard', '/portal'];

export default auth((req) => {
  const isProtected = PROTECTED.some(path => req.nextUrl.pathname.startsWith(path));
  if (isProtected && !req.auth) {
    const loginUrl = new URL('/auth/login', req.url);
    loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
});

export const config = {
  matcher: ['/dashboard/:path*', '/portal/:path*'],
};
