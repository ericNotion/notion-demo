import { getAllUserPrototypes } from "@/app/(root)/lib/fs-utils";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  try {
    const appDir = path.join(process.cwd(), "src/app");
    const users = await getAllUserPrototypes(appDir);
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching prototypes:", error);
    return NextResponse.json(
      { error: "Failed to fetch prototypes" },
      { status: 500 },
    );
  }
}
