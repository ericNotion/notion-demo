import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const layersIconGroup: IconGroup<"default"> = createIconGroup(
  "layers",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
