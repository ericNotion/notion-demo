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
      <path d="M16.875 10.55H12.5V17.5H7.5V10.55H3.125V9.375L10 2.5L16.875 9.375V10.55Z" />
    </>
  ),
};

export const upwardIcon: LoadedIconFunction = createIcon(
  "upward",
  iconDefinition,
);
