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
      <path d="M6.8 1.875L8.125 3.2L3.9875 7.3375L1.25 4.60312L2.575 3.27812L3.9875 4.69063L6.8 1.87813V1.875ZM3.9875 9.6875L2.575 8.275L1.25 9.6L3.9875 12.3375L8.125 8.2L6.8 6.875L3.9875 9.6875ZM3.9875 14.6875L2.575 13.275L1.25 14.6L3.9875 17.3375L8.125 13.2L6.8 11.875L3.9875 14.6875ZM8.75 4.0625V5.9375H17.5V4.0625H8.75ZM8.75 10.9375H17.5V9.0625H8.75V10.9375ZM8.75 15.9375H17.5V14.0625H8.75V15.9375Z" />
    </>
  ),
};

export const checklistIcon: LoadedIconFunction = createIcon(
  "checklist",
  iconDefinition,
);
