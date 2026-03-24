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
      <path d="M16.875 3.125V16.875H3.125V3.125H16.875Z" />
    </>
  ),
};

export const squareAlternateIcon: LoadedIconFunction = createIcon(
  "squareAlternate",
  iconDefinition,
);
