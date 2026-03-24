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
      <path d="M18.3 15.9375C18.0594 16.3531 18 16.4594 17.7594 16.875H2.24064C2.00001 16.4594 1.94064 16.3531 1.70001 15.9375L9.45939 2.5H10.5406L18.3 15.9375Z" />
    </>
  ),
};

export const triangleAlternateIcon: LoadedIconFunction = createIcon(
  "triangleAlternate",
  iconDefinition,
);
