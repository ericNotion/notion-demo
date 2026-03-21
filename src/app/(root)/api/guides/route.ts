import { getGuides } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const guides = await getGuides();

    return NextResponse.json(guides, {
      headers: {
        // Cache for 1 hour, allow serving stale content while revalidating
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error fetching guides:", error);
    return NextResponse.json(
      { error: "Failed to fetch guides" },
      { status: 500 },
    );
  }
}
