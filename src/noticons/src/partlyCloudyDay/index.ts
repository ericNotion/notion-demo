import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const partlyCloudyDayIconGroup: IconGroup<"default"> = createIconGroup(
  "partlyCloudyDay",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
