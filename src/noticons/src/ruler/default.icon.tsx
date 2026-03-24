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
      <path d="M13.125 1.25V18.75H6.875V16.875H10.625V15.625H6.875V13.75H9.375V12.5H6.875V10.625H10.625V9.375H6.875V7.5H9.375V6.25H6.875V4.375H10.625V3.125H6.875V1.25H13.125Z" />
    </>
  ),
};

export const rulerIcon: LoadedIconFunction = createIcon(
  "ruler",
  iconDefinition,
);
