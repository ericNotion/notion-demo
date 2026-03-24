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
      <path d="M17.5 5.7L8.125 15.075L2.5 9.45L3.825 8.125L8.125 12.425L16.175 4.375L17.5 5.7Z" />
    </>
  ),
};

export const checkmarkLineIcon: LoadedIconFunction = createIcon(
  "checkmarkLine",
  iconDefinition,
);
