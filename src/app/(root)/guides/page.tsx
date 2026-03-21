import { getGuides } from "@/lib/notion";
import type { Metadata } from "next";
import { GuideList } from "./components/GuideList";
import { filterGuidesForEnvironment } from "./utils";

export const metadata: Metadata = {
  title: "Guides | Prototype Playground",
  description: "Learn how to use the prototype playground effectively",
};

export const revalidate = 3600;

export default async function GuidesPage() {
  const guides = filterGuidesForEnvironment(await getGuides());

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16 md:py-20 lg:px-0 lg:py-24 xl:py-28">
      <GuideList guides={guides} />
    </div>
  );
}
