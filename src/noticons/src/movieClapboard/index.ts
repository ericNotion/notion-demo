import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const movieClapboardIconGroup: IconGroup<"default"> = createIconGroup(
  "movieClapboard",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
