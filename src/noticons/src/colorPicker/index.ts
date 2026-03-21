import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const colorPickerIconGroup: IconGroup<"default"> = createIconGroup(
  "colorPicker",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
