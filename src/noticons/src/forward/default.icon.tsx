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
      <path d="M17.5 10L10.625 16.875H9.45V12.5H2.5V7.5H9.45V3.125H10.625L17.5 10Z" />
    </>
  ),
};

export const forwardIcon: LoadedIconFunction = createIcon(
  "forward",
  iconDefinition,
);
