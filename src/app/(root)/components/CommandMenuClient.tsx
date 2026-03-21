"use client";
import dynamic from "next/dynamic";

const CommandMenu = dynamic(
  () => import("./CommandMenu").then((m) => m.CommandMenu),
  { ssr: false, loading: () => null },
);

export function CommandMenuClient() {
  return <CommandMenu />;
}
