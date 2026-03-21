import { ClientOnly } from "@/components/playground-kit/ClientOnly";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientOnly>{children}</ClientOnly>;
}
