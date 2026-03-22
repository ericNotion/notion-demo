"use client";

import { NotionShell } from "../shell";
import { Whiteboard } from "../components/whiteboard/Whiteboard";

export default function Page() {
  return (
    <NotionShell title="Whiteboard">
      <Whiteboard />
    </NotionShell>
  );
}
