import { ClientOnly } from "@/components/playground-kit/ClientOnly";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "@/lib/auth/SessionProvider";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { SWRConfig } from "swr";

import { CommandMenuClient } from "./(root)/components/CommandMenuClient";
import { CreatePrototypeDialog } from "./(root)/components/CreatePrototypeDialog";
import { GlobalKeyboardShortcuts } from "./(root)/components/GlobalKeyboardShortcuts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Playground",
    template: "%s",
  },
  description: "A playground for prototyping UI components and interactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full w-full">
      <body
        className={`bg-primary text-body text-primary relative min-h-full w-full font-sans subpixel-antialiased`}
        suppressHydrationWarning
      >
        <Analytics />
        <GlobalKeyboardShortcuts />
        <SessionProvider>
          <SWRConfig
            value={{
              errorRetryCount: 0,
              dedupingInterval: 10000,
              revalidateOnFocus: false,
              revalidateOnMount: true,
              shouldRetryOnError: false,
            }}
          >
            <ThemeProvider
              storageKey="prototype-theme"
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <CommandMenuClient />
              <CreatePrototypeDialog />
              {/* Needed to prevent hydration mismatches */}
              <ClientOnly>{children}</ClientOnly>
              <Toaster />
            </ThemeProvider>
          </SWRConfig>
        </SessionProvider>
      </body>
    </html>
  );
}
