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
      <path d="M3.125 3.125V16.875H16.875V3.125H3.125ZM14.0625 12.8125H12.1875V9.1375L6.95 14.375L5.625 13.05L10.8625 7.8125H7.1875V5.9375H14.0625V12.8125Z" />
    </>
  ),
};

export const promotedIcon: LoadedIconFunction = createIcon(
  "promoted",
  iconDefinition,
);
