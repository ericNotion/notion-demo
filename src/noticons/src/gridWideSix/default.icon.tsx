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
      <path d="M2.5 8.125H9.375V11.875H2.5V8.125ZM2.5 16.875H9.375V13.125H2.5V16.875ZM2.5 6.875H9.375V3.125H2.5V6.875ZM10.625 16.875H17.5V13.125H10.625V16.875ZM10.625 11.875H17.5V8.125H10.625V11.875ZM10.625 3.125V6.875H17.5V3.125H10.625Z" />
    </>
  ),
};

export const gridWideSixIcon: LoadedIconFunction = createIcon(
  "gridWideSix",
  iconDefinition,
);
