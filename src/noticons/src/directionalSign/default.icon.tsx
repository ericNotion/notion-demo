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
      <path d="M10.9375 10H17.5V15H10.9375V17.5H9.0625V15H4.375L1.875 12.5L4.375 10H9.0625V8.75H3.125V3.75H9.0625V2.5H10.9375V3.75H16.25L18.75 6.25L16.25 8.75H10.9375V10Z" />
    </>
  ),
};

export const directionalSignIcon: LoadedIconFunction = createIcon(
  "directionalSign",
  iconDefinition,
);
