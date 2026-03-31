import { getPrototypePageTitle } from "@/root/lib/fs-utils";
import { Metadata } from "next";
import { NotionShell } from "./shell";
import "./christmas-theme.css";

export async function generateMetadata(): Promise<Metadata> {
  const title = await getPrototypePageTitle("eric", "notion-clone");
  return { title };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="notion-clone-christmas">
      <NotionShell>{children}</NotionShell>
    </div>
  );
}
