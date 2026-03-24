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
      <path d="M16.25 12.5H10.9375V17.5H9.0625V12.5H4.375L0.625 8.75L4.375 5H9.0625V2.5H10.9375V5H16.25V12.5Z" />
    </>
  ),
};

export const directionalSignLeftIcon: LoadedIconFunction = createIcon(
  "directionalSignLeft",
  iconDefinition,
);
