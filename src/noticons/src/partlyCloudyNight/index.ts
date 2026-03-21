import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const partlyCloudyNightIconGroup: IconGroup<"default"> = createIconGroup(
  "partlyCloudyNight",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
