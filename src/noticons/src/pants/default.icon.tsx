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
      <path d="M10.625 8.125H9.375L6.875 18.125L3.125 17.5L5.625 2.5H14.375L16.875 17.5L13.125 18.125L10.625 8.125Z" />
    </>
  ),
};

export const pantsIcon: LoadedIconFunction = createIcon(
  "pants",
  iconDefinition,
);
