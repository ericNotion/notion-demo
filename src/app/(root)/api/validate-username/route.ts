import { getValidUsernames, isValidUsername } from "@/utils/getValidUsernames";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  try {
    if (username) {
      // Validate specific username
      const valid = await isValidUsername(username);
      return Response.json({
        valid,
        username,
      });
    } else {
      // Return all valid usernames (for autocomplete)
      const usernames = await getValidUsernames();
      return Response.json({
        usernames,
      });
    }
  } catch (error) {
    console.error("Error validating username:", error);
    return Response.json(
      { error: "Failed to validate username" },
      { status: 500 },
    );
  }
}
