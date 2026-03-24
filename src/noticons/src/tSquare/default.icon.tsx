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
      <path d="M17.5 6.875H12.5V18.125H7.5V15.625H10V14.375H7.5V11.875H10V10.625H7.5V8.125H10V6.875H2.5V5L7.5 2.5H12.5L17.5 5V6.875Z" />
    </>
  ),
};

export const tSquareIcon: LoadedIconFunction = createIcon(
  "tSquare",
  iconDefinition,
);
