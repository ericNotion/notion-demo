import type { IconGroup } from "../../iconUtils";
import { createIconGroup } from "../../iconUtils";

export const commitIconGroup: IconGroup<"default"> = createIconGroup(
  "commit",
  {
    default: {
      loader: () =>
        import(
          /* webpackChunkName: "icon-commit" */
          "./default.icon"
        ),
    },
  },
  ["commit", "git", "version", "save", "checkpoint"],
);
