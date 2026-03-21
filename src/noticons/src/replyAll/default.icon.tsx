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
      <path d="M19.375 11.25V15.625H17.5C17.5 13.6969 16.3031 12.5 14.375 12.5H13.125V15.625H11.875L7.5 11.25V15.625H6.25L0 9.375L6.25 3.125H7.5V7.5L11.875 3.125H13.125V6.25H14.375C17.4594 6.25 19.375 8.16563 19.375 11.25Z" />
    </>
  ),
};

export const replyAllIcon: LoadedIconFunction = createIcon(
  "replyAll",
  iconDefinition,
);
