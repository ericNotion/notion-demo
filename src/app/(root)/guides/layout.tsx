import { TopBar } from "@/root/components/TopBar";
import { getCurrentUsername } from "@/root/lib/fs-utils";
import { allowFileSystemOperations } from "@/utils/env";
import { ReactNode } from "react";

export default async function GuidesLayout({
  children,
}: {
  children: ReactNode;
}) {
  const currentUsername = await getCurrentUsername();
  const allowFileOps = allowFileSystemOperations();

  return (
    <div className="flex min-h-svh flex-col">
      <TopBar currentUsername={currentUsername} allowFileOps={allowFileOps} />

      {children}
    </div>
  );
}
