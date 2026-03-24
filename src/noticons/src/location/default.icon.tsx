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
      <path d="M17.5 3.38437L12.7937 17.5H11.5625L9.29688 10.7031L2.5 8.4375V7.20625L16.6156 2.5L17.5 3.38437Z" />
    </>
  ),
};

export const locationIcon: LoadedIconFunction = createIcon(
  "location",
  iconDefinition,
);
