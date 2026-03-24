import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const tamponIconGroup: IconGroup<"default"> = createIconGroup(
  "tampon",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
