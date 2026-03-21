import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const commandLineIconGroup: IconGroup<"default"> = createIconGroup(
  "commandLine",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
