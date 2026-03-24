import { getPrototypePageTitle } from "@/root/lib/fs-utils";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = await getPrototypePageTitle(
    "templates",
    "slippery-slope-desktop",
  );
  return { title };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
