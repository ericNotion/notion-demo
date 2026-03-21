# Security Documentation

This document outlines the security measures, potential vulnerabilities, and best practices for the Okta SSO implementation.

## Security Measures Implemented

### 1. Authentication & Authorization

#### Email Domain Restriction

- **Control**: Only `@makenotion.com` email addresses are allowed
- **Location**: `src/lib/auth/config.ts:58`
- **Implementation**: Domain suffix check in `signIn` callback

#### Email Verification Check

- **Control**: Okta email verification status must be true
- **Location**: `src/lib/auth/config.ts:54-56`
- **Implementation**: Validates `email_verified` flag from Okta profile
- **Prevents**: Unauthorized access via unverified email addresses

#### Okta Application Assignment

- **Control**: Users must be assigned to the "Prototype Playground" app in Okta
- **Location**: Okta admin console
- **Implementation**: Okta enforces application assignment before authentication
- **Prevents**: Access by users not explicitly provisioned in Okta

**Note:** The `users.json` file is optional and used only for metadata enrichment (Notion user IDs, GitHub usernames, custom usernames). Access control is managed through Okta application provisioning.

### 2. Open Redirect Protection

#### Callback URL Validation

- **Control**: Validates redirect URLs to prevent open redirects
- **Location**: `src/app/auth/signin/page.tsx:3-16`
- **Implementation**:
  - Rejects external URLs (must start with `/`)
  - Validates URL structure
  - Falls back to `/` if invalid
- **Prevents**: Phishing attacks via malicious redirects

### 3. Session Security

#### Session Configuration

- **Strategy**: JWT tokens stored in HTTP-only cookies
- **Max Age**: 7 days
- **Update Age**: 24 hours (token refreshed daily)
- **Location**: `src/lib/auth/config.ts:56-60`

#### Cookie Settings (NextAuth defaults)

- `httpOnly: true` - Prevents XSS access to tokens
- `secure: true` (in production) - HTTPS-only transmission
- `sameSite: "lax"` - CSRF protection

### 4. CSRF Protection

#### Server Actions

- **Control**: Form submissions use Next.js server actions
- **Location**: `src/app/auth/signin/page.tsx:36-40`
- **Implementation**: Built-in CSRF token validation
- **Protects**: Sign-in and sign-out operations

#### Sign-Out Protection

- **Control**: Sign-out uses server action instead of client fetch
- **Location**: `src/app/(root)/components/TopBar.tsx:164-175`
- **Prevents**: CSRF attacks against sign-out endpoint

### 5. Middleware Protection

#### Route Protection

- **Control**: All routes require authentication in production
- **Location**: `src/middleware.ts`
- **Exceptions**:
  - `/api/auth/*` - Authentication endpoints
  - `/_next/*` - Next.js internals
  - Development mode - No authentication required

### 6. Environment Variable Security

#### Validation

- **Control**: Required environment variables validated at startup
- **Location**: `src/lib/auth/config.ts:14-25`
- **Variables Checked**:
  - `OKTA_CLIENT_ID`
  - `OKTA_CLIENT_SECRET`
  - `OKTA_ISSUER`
  - `NEXTAUTH_SECRET`

#### Secure Secrets

- ✅ `NEXTAUTH_SECRET` - Random 32-byte value
- ✅ `OKTA_CLIENT_SECRET` - Stored in environment, never committed
- ✅ Secrets not exposed to client (no `NEXT_PUBLIC_` prefix)

### 7. Host Header Protection

#### Trust Host Configuration

- **Control**: Only trusts host header when explicitly enabled
- **Location**: `src/lib/auth/config.ts:95`
- **Implementation**: Requires `AUTH_TRUST_HOST=1` in environment
- **Use Case**: Only enable behind trusted proxies (Vercel, etc.)
- **Prevents**: Host header injection attacks

## Known Limitations

### 1. Development Mode Bypass

- **Issue**: All authentication is bypassed in development mode
- **Location**: `src/middleware.ts:11-13`
- **Risk**: Low (dev environments should not be exposed)
- **Mitigation**: Ensure `NODE_ENV=production` in production deployments

### 2. Client-Side Session Fetching

- **Issue**: Session fetched client-side without automatic refresh
- **Location**: `src/hooks/useSession.ts:10-26`
- **Risk**: Medium (stale sessions if logged out elsewhere)
- **Mitigation**: Consider adding periodic refresh or event listeners

### 3. User Lookup Race Condition

- **Issue**: User looked up in both `signIn` and `jwt` callbacks
- **Location**: `src/lib/auth/config.ts:61, 70`
- **Risk**: Low (user removal between callbacks unlikely)
- **Impact**: Could cause session errors if user removed mid-authentication

## Security Best Practices

### For Administrators

1. **Rotate Secrets Regularly**
   - Rotate `NEXTAUTH_SECRET` every 90 days
   - Update `OKTA_CLIENT_SECRET` when team members leave

2. **Monitor Access Logs**
   - Review Okta access logs for suspicious activity
   - Monitor failed authentication attempts

3. **Keep User Access Updated**
   - Unassign users from the Okta app when they leave
   - Audit Okta app assignments quarterly
   - Optionally: Remove departed users from `users.json` (for cleanup)

4. **Update Dependencies**
   - Keep NextAuth.js updated for security patches
   - Monitor security advisories

### For Developers

1. **Never Commit Secrets**
   - Use `.env.local` for local development
   - Never commit `.env` files
   - Use environment-specific secrets

2. **Validate All User Input**
   - Never trust query parameters
   - Sanitize all user-provided data
   - Use TypeScript for type safety

3. **Use Server Actions**
   - Prefer server actions over API routes for mutations
   - Ensures CSRF protection
   - Better security by default

4. **Test Security Features**
   - Verify domain restrictions
   - Test redirect validation
   - Confirm middleware protection

## Security Headers

### Recommended Headers (configure in `next.config.js`)

```js
{
  headers: [
    {
      key: "X-Frame-Options",
      value: "DENY",
    },
    {
      key: "X-Content-Type-Options",
      value: "nosniff",
    },
    {
      key: "Referrer-Policy",
      value: "strict-origin-when-cross-origin",
    },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=()",
    },
  ];
}
```

## Incident Response

### If Credentials Are Compromised

1. **Immediately rotate** `OKTA_CLIENT_SECRET` in Okta admin console
2. **Generate new** `NEXTAUTH_SECRET` and deploy
3. **Review** Okta access logs for unauthorized access
4. **Revoke** all active sessions (users must re-authenticate)
5. **Audit** Okta app assignments for unauthorized users

### If Unauthorized Access Detected

1. **Unassign user** from the Okta app (revokes access immediately)
2. **Review** Okta assignment history
3. **Check** Okta logs for the user's email
4. **Investigate** how the user was assigned to the app
5. **Review** recent commits for unauthorized changes (if applicable)
6. **Update** security procedures as needed

## Compliance Considerations

### Data Privacy

- **Minimal Data Collection**: Only email, name, and Notion IDs stored
- **Data Location**: User data in version control (git)
- **Data Retention**: Users retained until manually removed
- **Access Logs**: Handled by Okta and Vercel

### GDPR Considerations

- Users can request access removal (unassign from Okta app)
- Optional data in `users.json` can be removed on request
- No personal data beyond email/name/work IDs
- All data is work-related (Notion employment)

## Security Checklist for Production Deployment

- [ ] `OKTA_CLIENT_ID` configured
- [ ] `OKTA_CLIENT_SECRET` set (never committed)
- [ ] `OKTA_ISSUER` matches your Okta tenant
- [ ] `NEXTAUTH_SECRET` generated (32+ random bytes)
- [ ] `NEXTAUTH_URL` matches production domain
- [ ] `AUTH_TRUST_HOST=1` set (if behind proxy)
- [ ] `NEXT_PUBLIC_USE_OKTA=true` enabled
- [ ] `NODE_ENV=production` set
- [ ] Okta redirect URIs include production URL
- [ ] Users assigned to "Prototype Playground" app in Okta
- [ ] Test sign-in flow with Okta-provisioned user
- [ ] Test sign-in rejection with invalid email
- [ ] Test sign-in rejection with unprovisioned user
- [ ] Test sign-out functionality
- [ ] Verify middleware protection on all routes
- [ ] Security headers configured
- [ ] Dependencies updated

## Reporting Security Issues

If you discover a security vulnerability:

1. **Do NOT** open a public GitHub issue
2. Email security@makenotion.com with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)
3. Allow time for patching before disclosure

## References

- [NextAuth.js Security Best Practices](https://next-auth.js.org/configuration/options#security)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [Okta Security Documentation](https://developer.okta.com/docs/guides/secure-oauth-between-orgs/)
- [Next.js Security Headers](https://nextjs.org/docs/app/api-reference/next-config-js/headers)
