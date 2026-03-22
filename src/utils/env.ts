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
 * Check if file system operations should be allowed
 * Only allowed in development mode
 */
export function allowFileSystemOperations(): boolean {
  return isDevelopment();
}
