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
      <path d="M14.375 10.625H16.25V17.5H2.5V3.75H9.375V5.625H4.375V15.625H14.375V10.625ZM18.125 4.08437L15.9156 1.875L13.75 4.04063L15.9594 6.25L18.125 4.08437ZM6.25 13.3063L6.69063 13.7469L9.70937 12.4969L15.075 7.13125L12.8656 4.92188L7.5 10.2875L6.25 13.3063Z" />
    </>
  ),
};

export const composeIcon: LoadedIconFunction = createIcon(
  "compose",
  iconDefinition,
);
