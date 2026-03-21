import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const teapotIconGroup: IconGroup<"default"> = createIconGroup(
  "teapot",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
