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
      <path d="M16.25 3.75V10H17.5V11.875H10.9375V12.5406L17.5 15.8219L16.6625 17.5L10.9375 14.6375V17.5H9.0625V14.6375L3.3375 17.5L2.5 15.8219L9.0625 12.5406V11.875H2.5V10H3.75V3.75H2.5V1.875H17.5V3.75H16.25Z" />
    </>
  ),
};

export const slideshowIcon: LoadedIconFunction = createIcon(
  "slideshow",
  iconDefinition,
);
