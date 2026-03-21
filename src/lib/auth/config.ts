import { findUserByEmail } from "@/lib/notion/users-data";
import NextAuth, { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import type { OAuthConfig } from "next-auth/providers";

interface OktaProfile extends Record<string, unknown> {
  sub: string;
  email: string;
  email_verified: boolean;
  name?: string;
  preferred_username?: string;
}

function validateEnvVars() {
  const required = ["OKTA_CLIENT_ID", "OKTA_CLIENT_SECRET", "OKTA_ISSUER"];

  const authSecret = process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET;
  if (!authSecret) {
    required.push("AUTH_SECRET");
  }

  const missing = required.filter((name) => !process.env[name]);
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`,
    );
  }
}

function OktaProvider(options: {
  clientId: string;
  clientSecret: string;
  issuer: string;
}): OAuthConfig<OktaProfile> {
  return {
    id: "okta",
    name: "Okta",
    type: "oidc",
    checks: ["pkce", "state"],
    client: {
      token_endpoint_auth_method: "client_secret_basic",
    },
    issuer: options.issuer,
    clientId: options.clientId,
    clientSecret: options.clientSecret,
    profile(profile) {
      return {
        id: profile.sub,
        email: profile.email,
        name: profile.name ?? profile.preferred_username,
        image: null,
      };
    },
  };
}

if (process.env.NEXT_PUBLIC_USE_OKTA === "true") {
  validateEnvVars();
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
  providers: [
    OktaProvider({
      clientId: process.env.OKTA_CLIENT_ID || "",
      clientSecret: process.env.OKTA_CLIENT_SECRET || "",
      issuer: process.env.OKTA_ISSUER || "",
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async signIn({ profile, account }) {
      if (!profile?.email) {
        return false;
      }

      const oktaProfile = profile as OktaProfile;

      // Okta doesn't always return email_verified in the profile
      // If it's present, check it; otherwise treat Okta authentication as sufficient verification
      if (oktaProfile.email_verified === false) {
        return false;
      }

      if (!profile.email.endsWith("@makenotion.com")) {
        return false;
      }

      return true;
    },
    async jwt({ token, profile }) {
      if (profile?.email) {
        const email = profile.email as string;

        // Try to find user in users.json for enriched metadata
        const user = findUserByEmail(email);

        if (user) {
          // User exists in users.json - use configured values
          token.playgroundUsername = user.playgroundUsername;
          token.notionUserId = user.notionUserId;
          token.githubUsername = user.githubUsername;
        } else {
          // New user not in users.json - derive username from email
          // e.g., dtsao@makenotion.com -> dtsao
          const derivedUsername = email.split("@")[0];
          token.playgroundUsername = derivedUsername;
          // notionUserId and githubUsername remain undefined
        }
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token.playgroundUsername) {
        session.user.playgroundUsername = token.playgroundUsername as string;
      }
      if (token.notionUserId) {
        session.user.notionUserId = token.notionUserId as string;
      }
      if (token.githubUsername) {
        session.user.githubUsername = token.githubUsername as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  trustHost:
    process.env.NODE_ENV === "development" || !!process.env.AUTH_TRUST_HOST,
});
