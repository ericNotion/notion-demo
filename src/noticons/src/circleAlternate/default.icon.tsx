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
      <path d="M17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10Z" />
    </>
  ),
};

export const circleAlternateIcon: LoadedIconFunction = createIcon(
  "circleAlternate",
  iconDefinition,
);
