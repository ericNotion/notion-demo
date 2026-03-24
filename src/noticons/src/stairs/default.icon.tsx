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
      <path d="M17.5 4.375V15.625H2.5V11.875H6.25V8.125H10V4.375H17.5Z" />
    </>
  ),
};

export const stairsIcon: LoadedIconFunction = createIcon(
  "stairs",
  iconDefinition,
);
