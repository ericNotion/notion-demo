import type { IconGroup } from "../../iconUtils";
import { createIconGroup } from "../../iconUtils";

export const calendarAltIconGroup: IconGroup<
  "default" | "small" | "fill" | "fillSmall"
> = createIconGroup(
  "calendarAlt",
  {
    default: {
      loader: () => import("./default.icon"),
    },
    small: {
      loader: () => import("./small.icon"),
    },
    fill: {
      loader: () => import("./fill.icon"),
    },
    fillSmall: {
      loader: () => import("./fillSmall.icon"),
    },
  },
  ["calendar", "nav", "timeline", "date", "time"],
);
