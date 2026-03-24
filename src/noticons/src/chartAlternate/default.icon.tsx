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
      <path d="M5 11.875V13.125H12.5V16.875H5V18.75H3.125V1.25H5V3.125H10V6.875H5V8.125H16.875V11.875H5Z" />
    </>
  ),
};

export const chartAlternateIcon: LoadedIconFunction = createIcon(
  "chartAlternate",
  iconDefinition,
);
