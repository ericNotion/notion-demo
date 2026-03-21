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
      <path d="M15.8344 2.5H4.16562L2.5 12.5V17.5H17.5V12.5L15.8344 2.5ZM11.875 12.5C11.875 13.5344 11.0344 14.375 10 14.375C8.96562 14.375 8.125 13.5344 8.125 12.5H4.4L5.75312 4.375H14.2438L15.5969 12.5H11.8719H11.875Z" />
    </>
  ),
};

export const inboxIcon: LoadedIconFunction = createIcon(
  "inbox",
  iconDefinition,
);
