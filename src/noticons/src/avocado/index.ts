import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const avocadoIconGroup: IconGroup<"default"> = createIconGroup(
  "avocado",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
