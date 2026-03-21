import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const videoGameJoystickIconGroup: IconGroup<"default"> = createIconGroup(
  "videoGameJoystick",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
