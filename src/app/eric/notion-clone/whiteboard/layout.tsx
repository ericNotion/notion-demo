import { SlipperySidebarLayout } from "../shell";

export default function WhiteboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SlipperySidebarLayout>{children}</SlipperySidebarLayout>;
}
