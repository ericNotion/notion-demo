# Okta SSO Setup Guide

This guide explains how to configure Okta SSO for the Prototype Playground application, restricting access to users with `@makenotion.com` email addresses.

## Overview

The Okta SSO implementation provides secure authentication for production deployments while maintaining the existing file-based development authentication. When enabled, users must authenticate through Okta using their @makenotion.com accounts before accessing the application.

## Prerequisites

- Access to Notion's Okta admin console
- Admin permissions to create and configure applications in Okta
- Access to the production deployment environment variables

## Okta Application Configuration

### 1. Create a New Application in Okta

1. Log in to your Okta admin dashboard
2. Navigate to **Applications** > **Applications**
3. Click **Create App Integration**
4. Select **OIDC - OpenID Connect**
5. Select **Web Application**
6. Click **Next**

### 2. Configure Application Settings

**General Settings:**

- **App integration name**: `Prototype Playground` (or your preferred name)
- **Logo**: Upload the Notion logo (optional)

**Sign-in redirect URIs:**

```
https://playground.makenotion.com/api/auth/callback/okta
https://*.front-preview.notion.*/api/auth/callback/okta (for preview deployments)
http://localhost:4000/api/auth/callback/okta (for testing)
```

**Sign-out redirect URIs:**

```
https://playground.makenotion.com/auth/signin
https://*.front-preview.notion.*/auth/signin (for preview deployments)
http://localhost:4000/auth/signin (for testing)
```

**Controlled access:**

- Select **Limit access to selected groups** or **Allow everyone in your organization to access**
- Recommended: Create a specific group for Prototype Playground users

### 3. Note Your Application Credentials

After creating the application, note the following values:

- **Client ID**: Found on the application's General tab
- **Client Secret**: Found on the application's General tab (click "Show secret")
- **Okta Domain**: Your organization's Okta domain (e.g., `https://notion.okta.com`)

## Environment Configuration

### Production Environment Variables

Add the following environment variables to your production deployment (Vercel):

```bash
# Enable Okta authentication
NEXT_PUBLIC_USE_OKTA=true

# Okta Configuration
OKTA_CLIENT_ID=your_client_id_here
OKTA_CLIENT_SECRET=your_client_secret_here
OKTA_ISSUER=https://notion.okta.com

# NextAuth Configuration
NEXTAUTH_SECRET=your_random_secret_here
NEXTAUTH_URL=https://playground.makenotion.com
```

**Generating NEXTAUTH_SECRET:**

```bash
openssl rand -base64 32
```

### Development Environment

For local development, the application continues to use the file-based authentication system. If you want to test Okta authentication locally:

1. **Configure Okta for localhost**
   - Add to Okta admin Sign-in redirect URIs: `http://localhost:4000/api/auth/callback/okta`
   - Add to Okta admin Sign-out redirect URIs: `http://localhost:4000/auth/signin`

2. **Add credentials to `.env.local`**

   ```bash
   # Enable Okta testing
   NEXT_PUBLIC_USE_OKTA=true
   TEST_OKTA_LOCALLY=true

   # Okta credentials
   OKTA_CLIENT_ID=your_client_id_here
   OKTA_CLIENT_SECRET=your_client_secret_here
   OKTA_ISSUER=https://notion.okta.com

   # NextAuth config
   NEXTAUTH_SECRET=<generate with: openssl rand -base64 32>
   NEXTAUTH_URL=http://localhost:4000
   AUTH_TRUST_HOST=1
   ```

3. **Restart dev server**

   ```bash
   bun dev
   ```

4. **Test the flow**
   - Visit `http://localhost:4000`
   - You should be redirected to `/auth/signin`
   - Click "Sign in with Okta" to test the full authentication flow

**Note:** For normal development, leave `NEXT_PUBLIC_USE_OKTA=false` and `TEST_OKTA_LOCALLY=false` (or omit them) to use the file-based authentication system.

## User Management

### Automatic User Provisioning

**Users provisioned in Okta can sign in automatically** without manual configuration. Access control is managed through Okta application assignment:

1. **Okta Admin** assigns users to the "Prototype Playground" application
2. **User signs in** with their @makenotion.com Okta credentials
3. **Username derived** from email (e.g., `dtsao@makenotion.com` → `dtsao`)
4. **Access granted** immediately

### Enhanced User Configuration (Optional)

For users who need additional metadata (Notion user ID, GitHub username), add them to `src/data/users.json`:

```json
{
  "playgroundUsername": "username",
  "githubUsername": "github-handle",
  "notionEmail": "user@makenotion.com",
  "notionUserId": "notion-uuid",
  "oauthEmail": "user@makenotion.com",
  "oauthProvider": "okta"
}
```

**Why add users to users.json?**

- **Notion sync**: Populates the "Author" field in the Notion prototypes database
- **PR mapping**: Maps GitHub PR authors to playground usernames for automatic sync
- **Custom username**: Override the email-derived username (e.g., use "boss" instead of "amadrick")

### User Sign-In Flow

When a user signs in with Okta:

1. User is redirected to Okta for authentication
2. Okta verifies credentials and email domain
3. Application validates:
   - Email is verified (`email_verified: true`)
   - Email ends with `@makenotion.com`
4. Application checks `users.json`:
   - **If found**: Use configured `playgroundUsername`, `notionUserId`, `githubUsername`
   - **If not found**: Derive username from email (e.g., `dtsao@makenotion.com` → `dtsao`)
5. Session created with available metadata

## Security Features

### Access Control

The implementation enforces the following security measures:

1. **Okta Application Assignment**: Users must be assigned to the app in Okta
2. **Email Domain Validation**: Only `@makenotion.com` emails are allowed
3. **Email Verification**: Email must be verified in Okta (`email_verified: true`)
4. **Session-based Authentication**: Uses secure HTTP-only cookies
5. **OIDC Standard**: Implements OpenID Connect for secure authentication

**Note:** Access control is now managed through Okta application provisioning. The `users.json` file is optional and used only for metadata enrichment (Notion user IDs, GitHub usernames, custom usernames).

### Middleware Protection

The application uses middleware to protect routes in production:

- **Unprotected routes**: `/api/auth/*` (authentication endpoints)
- **Protected routes**: All other routes when `NEXT_PUBLIC_USE_OKTA=true`
- **Development mode**: All routes accessible without authentication

## Testing the Implementation

### 1. Test Sign-In Flow

1. Deploy to production with Okta enabled
2. Visit your production URL
3. You should be redirected to `/auth/signin`
4. Click "Sign in with Okta"
5. Complete Okta authentication
6. Verify you're redirected back to the application

### 2. Test Authorization

**Okta-Provisioned User Test:**

1. Sign in with any @makenotion.com email assigned to the app in Okta
2. Should successfully access the application
3. Username will be derived from email (e.g., `john@makenotion.com` → `john`)

**Enhanced Metadata Test:**

1. Sign in with an email registered in `users.json`
2. Should successfully access the application
3. Session will include custom username, Notion user ID, and GitHub username

**Invalid Domain Test:**

1. Attempt to sign in with a non-@makenotion.com email (if possible)
2. Should see "Access Denied" error

**Unprovisioned User Test:**

1. Attempt to sign in with a @makenotion.com email NOT assigned to the app in Okta
2. Should be blocked by Okta before reaching the application

### 3. Test Sign-Out

1. While signed in, click the user menu (ellipsis icon)
2. Click "Sign out"
3. Should be redirected to sign-in page
4. Verify you cannot access protected pages

## Troubleshooting

### Common Issues

**Issue: "Error connecting to Okta"**

- Verify `OKTA_CLIENT_ID` and `OKTA_CLIENT_SECRET` are correct
- Check that redirect URIs in Okta match your deployment URL

**Issue: "Access Denied" for valid users**

- Verify user is assigned to the app in Okta admin console
- Ensure email is verified in Okta (`email_verified: true`)
- Ensure email domain is exactly `@makenotion.com`
- Check that user has accepted Okta invitation (if sent)

**Issue: Infinite redirect loop**

- Verify `NEXTAUTH_URL` matches your deployment URL
- Check that middleware is not blocking auth routes
- Ensure `NEXTAUTH_SECRET` is set

**Issue: "Configuration Error"**

- Verify all required environment variables are set
- Check Okta issuer URL format: `https://your-domain.okta.com`
- Ensure no trailing slashes in URLs

### Debug Mode

To enable debug logging, add to your environment:

```bash
NEXTAUTH_DEBUG=true
```

This will output detailed authentication logs to the console.

## Migration from Username Selection

### Phased Rollout

**Phase 1: Parallel Authentication (Current)**

- Both username selection and Okta SSO are available
- Users can choose either method
- `NEXT_PUBLIC_USE_OKTA=false` by default

**Phase 2: Okta Required (Recommended)**

1. Announce the change to users
2. Set `NEXT_PUBLIC_USE_OKTA=true` in production
3. Monitor for access issues
4. Update users in `users.json` as needed

**Phase 3: Cleanup (Future)**

1. Remove username selection UI components
2. Remove `useProductionUsername` hook
3. Remove `/api/validate-username` endpoint
4. Update documentation

### User Communication

When migrating to Okta, communicate:

- Why the change is being made (improved security)
- When the change will happen
- How users sign in (Okta with @makenotion.com email)
- Who to contact if they have issues

## Architecture Overview

### Authentication Flow

```
User visits app
    ↓
[Middleware checks session]
    ↓
Not authenticated → Redirect to /auth/signin
    ↓
User clicks "Sign in with Okta"
    ↓
[NextAuth redirects to Okta]
    ↓
User authenticates with Okta
    ↓
[Okta redirects to /api/auth/callback/okta]
    ↓
[Callback validates]:
  1. Email ends with @makenotion.com
  2. User exists in users.json
    ↓
Success → Create session → Redirect to app
Failure → Redirect to /auth/error
```

### Key Files

**Authentication Configuration:**

- `src/lib/auth/config.ts` - NextAuth configuration with Okta provider
- `src/middleware.ts` - Route protection middleware
- `src/types/next-auth.d.ts` - TypeScript definitions

**API Routes:**

- `src/app/api/auth/[...nextauth]/route.ts` - NextAuth handlers

**UI Components:**

- `src/app/auth/signin/page.tsx` - Custom sign-in page
- `src/app/auth/error/page.tsx` - Error page
- `src/app/(root)/components/TopBar.tsx` - User menu with sign-out

**User Management:**

- `src/data/users.json` - User whitelist
- `src/lib/notion/users.ts` - User lookup functions

## Support

For issues or questions about Okta SSO setup:

1. Check this documentation
2. Review Okta admin console settings
3. Check application logs for errors
4. Contact the platform team

## Security Considerations

**⚠️ IMPORTANT: Read `docs/SECURITY.md` for comprehensive security documentation**

Key security measures implemented:

- **Email verification required**: Only verified @makenotion.com emails allowed
- **Open redirect protection**: Callback URLs validated to prevent phishing
- **CSRF protection**: Server actions used for all authentication operations
- **Session security**: 7-day max age with daily refresh
- **Environment validation**: Required secrets validated at startup

Security checklist:

- [ ] Keep `OKTA_CLIENT_SECRET` and `NEXTAUTH_SECRET` confidential
- [ ] Rotate secrets every 90 days
- [ ] Monitor Okta access logs for suspicious activity
- [ ] Review user list regularly and remove departing employees
- [ ] Keep NextAuth.js updated for security patches
- [ ] Only set `AUTH_TRUST_HOST=1` when behind trusted proxy
- [ ] Never commit secrets to version control

For security vulnerability reporting, see `docs/SECURITY.md`
