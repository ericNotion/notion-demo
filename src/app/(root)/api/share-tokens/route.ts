import { auth } from "@/lib/auth/config";
import { PLAYGROUND_BASE_URL } from "@/lib/notion/client";
import { findPrototype } from "@/lib/notion/prototypes";
import {
  listShareTokens,
  revokeShareToken,
  saveShareTokenRecord,
} from "@/lib/notion/share-tokens";
import { createShareToken } from "@/lib/share-tokens";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json(
        {
          error: "Share tokens can only be created in production.",
        },
        { status: 403 },
      );
    }

    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { prototypePath, expiresAt, name, notes } = body;

    if (!prototypePath || !expiresAt) {
      return NextResponse.json(
        { error: "prototypePath and expiresAt are required" },
        { status: 400 },
      );
    }

    const normalizedPath = prototypePath.replace(/^\/+/, "");

    const [username, slug] = normalizedPath.split("/");
    if (!username || !slug) {
      return NextResponse.json(
        { error: "Invalid path format" },
        { status: 400 },
      );
    }
    const prototype = await findPrototype(username, slug);
    if (!prototype) {
      return NextResponse.json(
        { error: "Prototype not found" },
        { status: 404 },
      );
    }

    const expiry = new Date(expiresAt);

    if (isNaN(expiry.getTime()) || expiry <= new Date()) {
      return NextResponse.json(
        { error: "expiresAt must be a valid future date" },
        { status: 400 },
      );
    }

    const { token, id } = await createShareToken(normalizedPath, expiry);
    const url = `${PLAYGROUND_BASE_URL}/${normalizedPath}?token=${token}`;

    await saveShareTokenRecord({
      tokenId: id,
      name: name || normalizedPath,
      prototypePath: normalizedPath,
      expiresAt: expiry.toISOString(),
      createdBy: session.user.email,
      shareUrl: url,
      notes,
    });

    return NextResponse.json({
      token,
      url,
      id,
      expiresAt: expiry.toISOString(),
    });
  } catch (error) {
    console.error("Error creating share token:", error);
    return NextResponse.json(
      { error: "Failed to create share token" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "id is required" }, { status: 400 });
    }

    await revokeShareToken(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error revoking share token:", error);
    return NextResponse.json(
      { error: "Failed to revoke share token" },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const path = req.nextUrl.searchParams.get("path") || undefined;
    const tokens = await listShareTokens(path);
    return NextResponse.json({ tokens });
  } catch (error) {
    console.error("Error listing share tokens:", error);
    return NextResponse.json(
      { error: "Failed to list share tokens" },
      { status: 500 },
    );
  }
}
