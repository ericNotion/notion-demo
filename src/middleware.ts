import { auth } from "@/lib/auth/config";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths
  if (
    pathname.startsWith("/api/auth/") ||
    pathname.startsWith("/api/setup-env") ||
    pathname.startsWith("/api/chat") ||
    pathname.startsWith("/auth/") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Skip auth in development unless testing Okta locally
  const testOktaLocally = process.env.TEST_OKTA_LOCALLY === "true";
  if (process.env.NODE_ENV === "development" && !testOktaLocally) {
    return NextResponse.next();
  }

  // Require Okta in production
  if (process.env.NEXT_PUBLIC_USE_OKTA !== "true") {
    return NextResponse.next();
  }

  const session = await auth();
  if (!session) {
    const signInUrl = new URL("/auth/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
