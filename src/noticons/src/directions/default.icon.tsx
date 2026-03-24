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
      <path d="M10.625 1.875H9.375L1.875 9.375V10.625L9.375 18.125H10.625L18.125 10.625V9.375L10.625 1.875ZM11.875 11.5625H11.25V9.6875H10C8.79063 9.6875 8.125 10.3531 8.125 11.5625V13.75H6.25V11.5625C6.25 9.31875 7.75625 7.8125 10 7.8125H11.25V5.9375H11.875L14.6875 8.75L11.875 11.5625Z" />
    </>
  ),
};

export const directionsIcon: LoadedIconFunction = createIcon(
  "directions",
  iconDefinition,
);
