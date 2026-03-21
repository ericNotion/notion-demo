import { auth } from "@/lib/auth/config";
import {
  findUserByEmail,
  loadUsers,
  saveUsers,
  type PlaygroundUser,
} from "@/lib/notion/users";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Verify user is authenticated
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Only allow when Okta is enabled (production or local testing)
    const isOktaTesting =
      process.env.NODE_ENV === "development" &&
      process.env.TEST_OKTA_LOCALLY === "true";
    const isOktaProduction =
      process.env.NODE_ENV === "production" &&
      process.env.NEXT_PUBLIC_USE_OKTA === "true";

    if (!isOktaTesting && !isOktaProduction) {
      return NextResponse.json(
        { error: "This endpoint is only available with Okta authentication" },
        { status: 403 },
      );
    }

    // Note: In production on Vercel, filesystem is read-only
    // This will only work in development/testing environments
    // For production, consider using a database or API service
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          error:
            "GitHub username configuration is not yet available in production. Please submit a PR to add yourself to users.json.",
        },
        { status: 501 },
      );
    }

    const body = await req.json();
    const { githubUsername } = body;

    if (!githubUsername || typeof githubUsername !== "string") {
      return NextResponse.json(
        { error: "GitHub username is required" },
        { status: 400 },
      );
    }

    // Validate GitHub username format
    if (!/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(githubUsername)) {
      return NextResponse.json(
        { error: "Invalid GitHub username format" },
        { status: 400 },
      );
    }

    const email = session.user.email;
    const users = await loadUsers();

    // Find existing user or create new entry
    const user = await findUserByEmail(email);

    if (user) {
      // Update existing user
      const userIndex = users.findIndex(
        (u) => u.playgroundUsername === user!.playgroundUsername,
      );
      if (userIndex >= 0) {
        users[userIndex] = {
          ...users[userIndex],
          githubUsername: githubUsername.toLowerCase(),
        };
      }
    } else {
      // Create new user entry with derived username
      const playgroundUsername = email.split("@")[0];
      const newUser: PlaygroundUser = {
        playgroundUsername,
        githubUsername: githubUsername.toLowerCase(),
        notionEmail: email,
        notionUserId: "", // Will be populated later if needed
        oauthEmail: email,
        oauthProvider: "okta",
      };
      users.push(newUser);
    }

    await saveUsers(users);

    return NextResponse.json({
      success: true,
      githubUsername: githubUsername.toLowerCase(),
    });
  } catch (error) {
    console.error("Error updating GitHub username:", error);
    return NextResponse.json(
      { error: "Failed to update GitHub username" },
      { status: 500 },
    );
  }
}
