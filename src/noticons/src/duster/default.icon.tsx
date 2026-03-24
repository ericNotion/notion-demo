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
      <path d="M17.5 13.125H8.2L3.825 17.5L2.5 16.175L6.875 11.8V2.5H8.125C9.66875 2.5 10.625 3.45625 10.625 5H12.5C14.0437 5 15 5.95625 15 7.5V9.375C16.5437 9.375 17.5 10.3313 17.5 11.875V13.125Z" />
    </>
  ),
};

export const dusterIcon: LoadedIconFunction = createIcon(
  "duster",
  iconDefinition,
);
