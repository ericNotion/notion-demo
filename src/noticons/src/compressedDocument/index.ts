import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const compressedDocumentIconGroup: IconGroup<"default"> =
  createIconGroup(
    "compressedDocument",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
