/**
 * API Route: Prototype Versions
 *
 * Gets all versions of a prototype by its versionGroupId.
 *
 * GET /api/prototype-versions?versionGroupId=username/original-slug
 *
 * Response: {
 *   versions: Array<{
 *     username: string,
 *     slug: string,
 *     title: string,
 *     version: number,
 *     branchedFromVersion?: number,
 *     createdAt: string,
 *     updatedAt: string,
 *   }>
 * }
 */

import { findVersions, type VersionInfo } from "@/root/lib/version-utils";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const versionGroupId = searchParams.get("versionGroupId");

    if (!versionGroupId) {
      return new Response(
        JSON.stringify({ error: "versionGroupId is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const versions: VersionInfo[] = await findVersions(versionGroupId);

    return new Response(JSON.stringify({ versions }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[prototype-versions] Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
