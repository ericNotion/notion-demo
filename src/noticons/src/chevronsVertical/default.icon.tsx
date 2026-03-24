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
      <path d="M6.325 8.825L5 7.5L10 2.5L15 7.5L13.675 8.825L10 5.15L6.325 8.825ZM10 14.8469L6.325 11.1719L5 12.4969L10 17.4969L15 12.4969L13.675 11.1719L10 14.8469Z" />
    </>
  ),
};

export const chevronsVerticalIcon: LoadedIconFunction = createIcon(
  "chevronsVertical",
  iconDefinition,
);
