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
      <path d="M17.5 12.5H10.55V16.875H9.375L2.5 10L9.375 3.125H10.55V7.5H17.5V12.5Z" />
    </>
  ),
};

export const backwardIcon: LoadedIconFunction = createIcon(
  "backward",
  iconDefinition,
);
