"use client";

import { BlockEditor, TitleEditor } from "@/components/notion-kit/editor";
import { PageTopBar } from "@/components/notion-kit/PageTopBar";
import {
  PrimarySidebar,
  PrimarySidebarLayout,
} from "@/components/notion-kit/PrimarySidebar";
import { blocksAtom, documentTitleAtom, lastSavedAtom } from "../atoms";

export default function NotionUI() {
  return (
    <div className="flex h-screen overflow-hidden">
      <PrimarySidebarLayout sidebar={<PrimarySidebar />}>
        {/* Main content column */}
        <div className="bg-primary flex min-w-0 flex-1 flex-col">
          {/* Page topbar */}
          <PageTopBar title={documentTitleAtom} />

          {/* Editor content */}
          <div className="mx-auto flex h-full w-full max-w-3xl flex-col overflow-y-auto px-8">
            <div className="pt-[40px] pb-[4px]">
              <div className="h-[28px]"></div>
            </div>
            <TitleEditor
              className="content-page-title mx-auto w-full max-w-[710px] px-[2px] pt-[3px] text-3xl font-bold outline-none"
              titleAtom={documentTitleAtom}
              lastSavedAtom={lastSavedAtom}
            />
            <div className="mt-[16px] flex-1">
              <BlockEditor
                className="mx-auto w-full max-w-[710px]"
                blocksAtom={blocksAtom}
                lastSavedAtom={lastSavedAtom}
              />
            </div>
          </div>
        </div>
      </PrimarySidebarLayout>
    </div>
  );
}
