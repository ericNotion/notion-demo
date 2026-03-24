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
      <path d="M10.5406 2.5H9.45939L1.70001 15.9375C1.94064 16.3531 2.00001 16.4594 2.24064 16.875H17.7563C17.9969 16.4594 18.0563 16.3531 18.2969 15.9375L10.5406 2.5ZM4.40626 15L10 5.3125L15.5938 15H4.40626Z" />
    </>
  ),
};

export const triangleIcon: LoadedIconFunction = createIcon(
  "triangle",
  iconDefinition,
);
