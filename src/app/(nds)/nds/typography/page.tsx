"use client";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-6">
      <div className="flex flex-col gap-4">
        <span className="text-secondary font-medium">UI</span>
        <span className="text-title-xl">.text-title-xl</span>
        <span className="text-title-lg">.text-title-lg</span>
        <span className="text-title">.text-title</span>
        <span className="text-title-sm">.text-title-sm</span>
        <span className="text-body-lg">.text-body-lg</span>
        <span className="text-body">.text-body</span>
        <span className="text-body-sm">.text-body-sm</span>
        <span className="text-caption">.text-caption</span>
        <span className="text-caption-sm">.text-caption-sm</span>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-secondary font-medium">Page Content</span>
        <span className="content-page-title">.content-page-title</span>
        <span className="content-full-page-database-title">
          .content-full-page-database-title
        </span>
        <span className="content-inline-database-title">
          .content-inline-database-title
        </span>
        <span className="content-h1">.content-h1</span>
        <span className="content-h2">.content-h2</span>
        <span className="content-h3">.content-h3</span>
        <span className="content-mention">.content-mention</span>
        <span className="content-text-block">.content-text-block</span>
        <span className="content-text-block-bold">
          .content-text-block-bold
        </span>
      </div>
    </main>
  );
}
