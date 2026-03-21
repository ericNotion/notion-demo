import { lookupNotionUserByEmail } from "@/lib/notion/users";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Valid email required" },
      { status: 400 },
    );
  }

  try {
    const user = await lookupNotionUserByEmail(email);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ id: user.id, name: user.name });
  } catch (error) {
    console.error("Notion lookup failed:", error);
    return NextResponse.json({ error: "Lookup failed" }, { status: 500 });
  }
}
