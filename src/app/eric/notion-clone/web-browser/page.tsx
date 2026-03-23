"use client";

import { Agentation } from "@/components/playground-kit";
import { WebBrowserLayout } from "../components/web-browser/WebBrowserLayout";
import { MockNotionPage } from "../components/web-browser/MockNotionPage";

export default function WebBrowserPage() {
  return (
    <Agentation>
      <WebBrowserLayout>
        <MockNotionPage />
      </WebBrowserLayout>
    </Agentation>
  );
}
