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
      <path d="M2.5 10.625H9.375V15.625H2.5V10.625ZM2.5 9.375H9.375V4.375H2.5V9.375ZM10.625 15.625H17.5V10.625H10.625V15.625ZM10.625 4.375V9.375H17.5V4.375H10.625Z" />
    </>
  ),
};

export const gridWideIcon: LoadedIconFunction = createIcon(
  "gridWide",
  iconDefinition,
);
