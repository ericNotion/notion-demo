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
      <path d="M3.125 2.5L5.625 17.5H14.375L16.875 2.5H3.125ZM14.6625 4.375L14.2469 6.875H5.75625L5.34063 4.375H14.6625Z" />
    </>
  ),
};

export const highballIcon: LoadedIconFunction = createIcon(
  "highball",
  iconDefinition,
);
