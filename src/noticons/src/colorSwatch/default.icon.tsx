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
      <path d="M4.375 2.5V17.5H15.625V2.5H4.375ZM13.75 15.625H6.25V11.875H13.75V15.625Z" />
    </>
  ),
};

export const colorSwatchIcon: LoadedIconFunction = createIcon(
  "colorSwatch",
  iconDefinition,
);
