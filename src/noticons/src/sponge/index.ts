import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const spongeIconGroup: IconGroup<"default"> = createIconGroup(
  "sponge",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
