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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10.7 15L9.375 13.675L12.1125 10.9375H5V9.0625H12.1125L9.375 6.325L10.7 5L15.7 10L10.7 15Z" />
    </>
  ),
};

export const arrowRightIcon: LoadedIconFunction = createIcon(
  "arrowRight",
  iconDefinition,
);
