import React from "react";

import {
  createIcon,
  type IconDefinition,
  type LoadedIconFunction,
} from "@nds-icons";

export const iconDefinition: IconDefinition = {
  viewBox: "0 0 20 20",
  svg: (
    <>
      <path d="M16.25 8.125V17.5H3.75V8.125H11.875V4.375C11.875 3.09687 11.2781 2.5 10 2.5C8.72188 2.5 8.125 3.09687 8.125 4.375V6.25H6.25V4.375C6.25 2.0625 7.6875 0.625 10 0.625C12.3125 0.625 13.75 2.0625 13.75 4.375V8.125H16.25Z" />
    </>
  ),
};

export const unlockIcon: LoadedIconFunction = createIcon(
  "unlock",
  iconDefinition,
);
