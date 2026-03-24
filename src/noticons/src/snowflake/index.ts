import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const snowflakeIconGroup: IconGroup<"default"> = createIconGroup(
  "snowflake",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
