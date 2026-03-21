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
      <path d="M17.5 3.75V1.875H2.5V3.75H3.75V10H2.5V11.875H9.0625V12.5406L2.5 15.8219L3.3375 17.5L9.0625 14.6375V17.5H10.9375V14.6375L16.6625 17.5L17.5 15.8219L10.9375 12.5406V11.875H17.5V10H16.25V3.75H17.5ZM13.75 7.34375L8.4375 10H7.5V3.75H8.4375L13.75 6.40625V7.34375Z" />
    </>
  ),
};

export const slideshowPlayIcon: LoadedIconFunction = createIcon(
  "slideshowPlay",
  iconDefinition,
);
