import { getGuides } from "@/lib/notion";
import { PrototypeTableWrapper } from "@/root/components/PrototypeTableWrapper";
import { TopBar } from "@/root/components/TopBar";
import { getAllUserPrototypes, getCurrentUsername } from "@/root/lib/fs-utils";
import { Prototype } from "@/types/prototypes";
import { allowFileSystemOperations } from "@/utils/env";
import path from "path";
import { GetStartedBanner } from "./(root)/components/GetStartedBanner";
import { RootConfigPanel } from "./(root)/components/RootConfigPanel";

type PrototypeWithAuthor = Prototype & { username: string };

export default async function RootIndexPage() {
  const appDir = path.join(process.cwd(), "src/app");
  const users = await getAllUserPrototypes(appDir);
  const currentUsername = await getCurrentUsername();
  const allowFileOps = allowFileSystemOperations();
  const guides = await getGuides();

  // Flatten all prototypes with their authors
  const allPrototypes: PrototypeWithAuthor[] = [];
  users.forEach((user) => {
    if (user.username !== "templates" && user.username !== "nds") {
      user.prototypes.forEach((proto) => {
        allPrototypes.push({
          ...proto,
          username: user.username,
        });
      });
    }
  });

  const templatesUser = users.find((u) => u.username === "templates");

  return (
    <div className="flex min-h-svh flex-col">
      <TopBar currentUsername={currentUsername} allowFileOps={allowFileOps} />

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-4 py-16 md:px-8 lg:px-16 xl:py-20 2xl:max-w-7xl 2xl:py-28">
        {!currentUsername && allowFileOps && <SetupBanner />}
        <GetStartedBanner />

        <PrototypeTableWrapper
          prototypes={allPrototypes}
          currentUsername={currentUsername}
          allowFileOps={allowFileOps}
          templates={templatesUser?.prototypes}
          guides={guides}
        />
      </div>

      <RootConfigPanel />
    </div>
  );
}

function SetupBanner() {
  return (
    <section className="grid min-h-0 grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-10">
      <div className="min-h-0 lg:col-span-3 lg:col-start-2 xl:col-start-2 2xl:col-span-3 2xl:col-start-2">
        <div className="bg-tertiary rounded-lg p-4 text-sm">
          <span className="font-mono">
            Run{" "}
            <code className="-mx-1 rounded-md bg-black/10 px-1 py-0.5 font-mono dark:bg-white/10">
              bun scripts/setup
            </code>{" "}
            in your terminal to get started
          </span>
        </div>
      </div>
    </section>
  );
}
