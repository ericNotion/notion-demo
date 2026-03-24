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
      <path d="M8.125 13.125H11.875V16.875H8.125V13.125ZM3.125 6.875H6.875V3.125H3.125V6.875ZM3.125 16.875H6.875V13.125H3.125V16.875ZM3.125 11.875H6.875V8.125H3.125V11.875ZM13.125 16.875H16.875V13.125H13.125V16.875ZM8.125 11.875H11.875V8.125H8.125V11.875ZM13.125 3.125V6.875H16.875V3.125H13.125ZM13.125 11.875H16.875V8.125H13.125V11.875ZM8.125 6.875H11.875V3.125H8.125V6.875Z" />
    </>
  ),
};

export const gridDenseIcon: LoadedIconFunction = createIcon(
  "gridDense",
  iconDefinition,
);
