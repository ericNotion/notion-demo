import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const stickerIconGroup: IconGroup<"default"> = createIconGroup(
  "sticker",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
