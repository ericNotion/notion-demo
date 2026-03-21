// Type declarations for built icon modules
declare module "nds-icons/*.icon.js" {
  import { LoadedIconFunction } from "./index";

  const icon: LoadedIconFunction;
  export = icon;
}

declare module "nds-icons/icon-manifest" {
  interface IconManifestItem {
    dir: string;
    name: string;
    tags: string[];
    variants: string[];
  }

  export const iconManifest: IconManifestItem[];
}

declare module "nds-icons/icon-import-map" {
  import { LoadedIconFunction } from "./index";

  export const iconImportMap: Record<
    string,
    Record<string, LoadedIconFunction>
  >;
}
