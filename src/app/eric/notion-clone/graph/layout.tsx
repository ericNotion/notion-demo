import type { Metadata } from "next";
import metadata from "./metadata.json";

export const generateMetadata = (): Metadata => {
  return {
    title: metadata.title,
    description: metadata.description,
  };
};

export default function GraphLayout({ children }: { children: React.ReactNode }) {
  return children;
}
