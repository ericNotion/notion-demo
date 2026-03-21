import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const languageIconGroup: IconGroup<"default"> = createIconGroup(
  "language",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
