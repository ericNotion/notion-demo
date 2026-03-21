/**
 * Environment detection utilities for development vs production behavior
 */

/**
 * Check if we're running in development mode
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development";
}

/**
 * Check if we're running in production mode
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

/**
 * Check if we're using static export mode
 * This is true when building for static export or when running the built static app
 */
function isStaticMode(): boolean {
  return (
    process.env.NEXT_PUBLIC_STATIC_EXPORT === "true" ||
    (isProduction() && !process.env.VERCEL_URL)
  );
}

/**
 * Check if file system operations should be allowed
 * Only allowed in development mode
 */
export function allowFileSystemOperations(): boolean {
  return isDevelopment();
}
