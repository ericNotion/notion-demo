import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const dialogueIconGroup: IconGroup<"default"> = createIconGroup(
  "dialogue",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
