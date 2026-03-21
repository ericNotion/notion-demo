"use server";

import { signIn, signOut } from "@/lib/auth/config";

export async function handleSignIn(callbackUrl: string = "/") {
  await signIn("okta", { redirectTo: callbackUrl });
}

export async function handleSignOut() {
  await signOut({ redirectTo: "/auth/signin" });
}
