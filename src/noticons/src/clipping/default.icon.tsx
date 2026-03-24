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
      <path d="M11.25 11.25H16.875V12.5L12.5 16.875H11.25V11.25ZM3.125 3.125V16.875H10V10H16.875V3.125H3.125Z" />
    </>
  ),
};

export const clippingIcon: LoadedIconFunction = createIcon(
  "clipping",
  iconDefinition,
);
