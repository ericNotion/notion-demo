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
      <path d="M20 9.375L13.75 15.625H12.5V12.5H11.25C9.32187 12.5 8.125 13.6969 8.125 15.625H6.25C6.25 13.6969 5.05312 12.5 3.125 12.5H0.625V6.25H2.5C4.85938 6.25 6.52812 7.37188 7.1875 9.27813C7.84688 7.37188 9.51562 6.25 11.875 6.25H12.5V3.125H13.75L20 9.375Z" />
    </>
  ),
};

export const bounceIcon: LoadedIconFunction = createIcon(
  "bounce",
  iconDefinition,
);
