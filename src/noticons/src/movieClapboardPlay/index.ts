import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const movieClapboardPlayIconGroup: IconGroup<"default"> =
  createIconGroup(
    "movieClapboardPlay",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
