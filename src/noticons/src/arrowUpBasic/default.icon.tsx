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
      <path d="M16.175 11.25L10.9375 6.0125V17.5H9.0625V6.0125L3.825 11.25L2.5 9.925L10 2.425L17.5 9.925L16.175 11.25Z" />
    </>
  ),
};

export const arrowUpBasicIcon: LoadedIconFunction = createIcon(
  "arrowUpBasic",
  iconDefinition,
);
