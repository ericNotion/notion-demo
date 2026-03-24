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
      <path d="M10.9375 3.125V1.25H9.0625V3.125L5.3125 5V17.5H14.6875V5L10.9375 3.125ZM12.8125 8.125H7.1875V6.15937L10 4.75312L12.8125 6.15937V8.125Z" />
    </>
  ),
};

export const dairyIcon: LoadedIconFunction = createIcon(
  "dairy",
  iconDefinition,
);
