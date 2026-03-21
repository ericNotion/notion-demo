"use client";

import { Dithering } from "@paper-design/shaders-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative min-h-dvh">
      {children}
      {mounted && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[400px]">
          <Dithering
            speed={1}
            shape="wave"
            type="4x4"
            size={3.3}
            scale={1}
            colorBack="#00000000"
            colorFront={isDark ? "#333333" : "#EEE"}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
            }}
          />
        </div>
      )}
    </div>
  );
}
