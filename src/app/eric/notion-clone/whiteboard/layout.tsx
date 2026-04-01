import { NotionShell } from "../shell";

export default function WhiteboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NotionShell>{children}</NotionShell>;
}
