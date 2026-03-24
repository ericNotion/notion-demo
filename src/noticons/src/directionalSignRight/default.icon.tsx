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
      <path d="M15 12.5H10.9375V17.5H9.0625V12.5H3.125V5H9.0625V2.5H10.9375V5H15L18.75 8.75L15 12.5Z" />
    </>
  ),
};

export const directionalSignRightIcon: LoadedIconFunction = createIcon(
  "directionalSignRight",
  iconDefinition,
);
