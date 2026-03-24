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
      <path d="M16.875 9.45V10.625L10 17.5L3.125 10.625V9.45H7.5V2.5H12.5V9.45H16.875Z" />
    </>
  ),
};

export const downwardIcon: LoadedIconFunction = createIcon(
  "downward",
  iconDefinition,
);
