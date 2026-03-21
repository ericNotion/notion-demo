"use client";

import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-50 p-6 dark:bg-black">
      <div className="flex w-full max-w-xl flex-col items-center rounded-2xl border border-gray-200 bg-white/80 p-10 shadow-xl dark:border-neutral-700 dark:bg-neutral-800">
        <h1 className="mb-4 text-center text-4xl font-extrabold text-black dark:text-white">
          {/*PROTOTYPE_TITLE*/}
        </h1>
        <div className="flex gap-2">
          <Button variant="tint" onClick={() => window.history.back()}>
            Go Back
          </Button>
          <a href="/*CURSOR_URL*/" target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Open in Cursor</Button>
          </a>
        </div>
      </div>
    </main>
  );
}
