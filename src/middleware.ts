import { auth } from "@/lib/auth/config";
import {
  isPathAllowed,
  isShareTokenActive,
  validateShareToken,
} from "@/lib/share-tokens";
import { NextRequest, NextResponse } from "next/server";

const SHARE_TOKEN_COOKIE = "__share_token";

async function handleShareToken(
  req: NextRequest,
): Promise<NextResponse | null> {
  const { pathname, searchParams } = req.nextUrl;
  const tokenParam = searchParams.get("token");

  if (tokenParam) {
    const payload = await validateShareToken(tokenParam);
    if (payload && isPathAllowed(pathname, payload.path)) {
      const active = await isShareTokenActive(payload.id);
      if (active) {
        const url = req.nextUrl.clone();
        url.searchParams.delete("token");
        const response = NextResponse.redirect(url);
        response.cookies.set(SHARE_TOKEN_COOKIE, tokenParam, {
          httpOnly: true,
          secure: true,
          sameSite: "lax",
          path: `/${payload.path}`,
          expires: new Date(payload.expiresAt * 1000),
        });
        return response;
      }
    }
  }

  const cookieToken = req.cookies.get(SHARE_TOKEN_COOKIE)?.value;
  if (cookieToken) {
    const payload = await validateShareToken(cookieToken);
    if (payload && isPathAllowed(pathname, payload.path)) {
      const active = await isShareTokenActive(payload.id);
      if (active) return NextResponse.next();
    }
  }

  return null;
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always allow access to auth pages, NextAuth API routes, and setup/webhook endpoints
  if (
    pathname.startsWith("/auth/") ||
    pathname.startsWith("/api/auth/") ||
    pathname.startsWith("/api/setup-env") ||
    pathname.startsWith("/api/lookup-notion-user") ||
    pathname.startsWith("/api/slack-notify")
  ) {
    return NextResponse.next();
  }

  // Skip auth in development unless testing Okta locally
  const testOktaLocally = process.env.TEST_OKTA_LOCALLY === "true";
  if (process.env.NODE_ENV === "development" && !testOktaLocally) {
    return NextResponse.next();
  }

  // Skip auth if Okta is not enabled
  if (process.env.NEXT_PUBLIC_USE_OKTA !== "true") {
    return NextResponse.next();
  }

  // Check share token before requiring auth
  const shareResponse = await handleShareToken(req);
  if (shareResponse) return shareResponse;

  // Check authentication
  const session = await auth();
  if (!session) {
    const signInUrl = new URL("/auth/signin", req.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
