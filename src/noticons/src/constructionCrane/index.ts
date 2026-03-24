import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const constructionCraneIconGroup: IconGroup<"default"> = createIconGroup(
  "constructionCrane",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
