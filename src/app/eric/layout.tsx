import "./styles.css";

// Enable dynamic rendering for prototype pages (no static pre-rendering)
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
