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
      <path d="M16.4469 9.14688C15.2656 6.78438 13.6 5.4875 11.25 5.11563V3.75H8.75V5H1.25V11.25H3.125C4.66875 11.25 5.625 12.2063 5.625 13.75V15H18.75V13.75L16.4469 9.14688ZM3.125 9.375V6.875H8.75C10.2937 6.875 11.25 7.83125 11.25 9.375H3.125Z" />
    </>
  ),
};

export const clothesIronIcon: LoadedIconFunction = createIcon(
  "clothesIron",
  iconDefinition,
);
