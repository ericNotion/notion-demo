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
      <path d="M17.5 4.375H12.4469L13.125 0.309375L11.275 0L10.5469 4.375H2.5V6.25H4.0625L5.9375 17.5H14.0625L15.9375 6.25H17.5V4.375ZM10.2344 6.25L9.92188 8.125H6.275L5.9625 6.25H10.2344ZM13.725 8.125H11.8219L12.1344 6.25H14.0375L13.725 8.125Z" />
    </>
  ),
};

export const drinkIcon: LoadedIconFunction = createIcon(
  "drink",
  iconDefinition,
);
