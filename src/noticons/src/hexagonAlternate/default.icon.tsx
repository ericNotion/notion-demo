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
      <path d="M17.5 5.66877V14.3281L10 18.6594L2.5 14.3281V5.66877L10 1.33752L17.5 5.66877Z" />
    </>
  ),
};

export const hexagonAlternateIcon: LoadedIconFunction = createIcon(
  "hexagonAlternate",
  iconDefinition,
);
