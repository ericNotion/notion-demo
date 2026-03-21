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
      <path d="M10 5.55L15 10.55L13.675 11.875L10.9375 9.1375V18.125H9.0625V9.1375L6.325 11.875L5 10.55L10 5.55ZM3.125 2.5V4.375H16.875V2.5H3.125Z" />
    </>
  ),
};

export const arrowUpLineIcon: LoadedIconFunction = createIcon(
  "arrowUpLine",
  iconDefinition,
);
