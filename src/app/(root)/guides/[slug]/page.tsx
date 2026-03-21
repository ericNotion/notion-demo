import { getAllGuideSlugs, getGuideBySlug, getGuides } from "@/lib/notion";
import { BlockRenderer } from "@/lib/notion/BlockRenderer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackToGuidesLink } from "../components/BackToGuidesLink";
import { EditInNotionButton } from "../components/EditInNotionButton";
import { GuideList } from "../components/GuideList";
import { filterGuidesForEnvironment } from "../utils";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllGuideSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const guide = await getGuideBySlug(params.slug);

  if (!guide) {
    return {
      title: "Guide Not Found | Prototype Playground",
    };
  }

  return {
    title: `${guide.title} | Guides`,
    description:
      guide.description || `Read ${guide.title} on Prototype Playground`,
  };
}

export default async function GuidePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const [guide, allGuides] = await Promise.all([
    getGuideBySlug(params.slug),
    getGuides().then(filterGuidesForEnvironment),
  ]);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-1 flex-col gap-8 px-4 py-12 md:px-0 lg:py-16 xl:py-20">
        <BackToGuidesLink />

        <article className="flex flex-col gap-6">
          <header className="flex flex-col gap-2">
            <h1 className="text-primary text-3xl leading-[1.2] font-bold -tracking-[0.64px] md:text-4xl lg:text-[2.5rem]">
              {guide.title}
            </h1>
          </header>

          <div className="text-lg">
            <BlockRenderer blocks={guide.blocks} />
          </div>
        </article>
      </div>

      {allGuides.length > 1 && (
        <section className="flex flex-col gap-4 bg-black/[0.02] px-4 py-8 md:px-0 lg:py-12 xl:py-16 2xl:py-20 dark:bg-white/5">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
            <h2 className="text-tertiary px-2 text-base font-semibold">
              More Guides
            </h2>
            <GuideList guides={allGuides} />
          </div>
        </section>
      )}

      <EditInNotionButton pageId={guide.id} />
    </>
  );
}
