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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 10H4.375C4.375 6.89375 6.89375 4.375 10 4.375V10Z" />
    </>
  ),
};

export const circleSixEighthsIcon: LoadedIconFunction = createIcon(
  "circleSixEighths",
  iconDefinition,
);
