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
      <path d="M11.5625 2.5V14.6875C11.5625 16.4219 10.3656 17.5 8.4375 17.5C6.50937 17.5 5.3125 16.4219 5.3125 14.6875C5.3125 12.9531 6.50937 11.875 8.4375 11.875C8.9 11.875 9.31563 11.9375 9.6875 12.0563V2.5H11.5625Z" />
    </>
  ),
};

export const noteQuarterIcon: LoadedIconFunction = createIcon(
  "noteQuarter",
  iconDefinition,
);
