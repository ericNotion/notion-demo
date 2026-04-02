import { DesktopUI } from "@/components/desktop-kit";
import type { Metadata } from "next";
import NotionShell from "../shell";

export const metadata: Metadata = {
  title: "Whiteboard - Notion Clone",
  description: "Collaborative whiteboard with Post-it notes that convert to tasks",
};

export default function WhiteboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DesktopUI>
      <NotionShell>{children}</NotionShell>
    </DesktopUI>
  );
}
