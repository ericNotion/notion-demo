import { getPrototypePageTitle } from "@/root/lib/fs-utils";
import { Metadata } from "next";
import { NotionShell } from "./shell";
import "./rainbow-road.css";

export async function generateMetadata(): Promise<Metadata> {
  const title = await getPrototypePageTitle("eric", "notion-clone");
  return { title };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <NotionShell>{children}</NotionShell>;
}
