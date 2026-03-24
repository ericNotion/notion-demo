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
      <path d="M18.75 9.375L12.5 15.625H11.25V12.5H7.8125L8.75 14.375V15.625H1.875V12.5H4.375L1.875 7.5V6.25H11.25V3.125H12.5L18.75 9.375Z" />
    </>
  ),
};

export const redirectIcon: LoadedIconFunction = createIcon(
  "redirect",
  iconDefinition,
);
