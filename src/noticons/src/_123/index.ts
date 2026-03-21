import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const _123IconGroup: IconGroup<"default"> = createIconGroup(
  "_123",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
