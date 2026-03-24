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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM14.1156 14.0625L10 12.0031L5.88438 14.0625L5 13.1781L9.24687 4.6875H10.7562L15.0031 13.1781L14.1187 14.0625H14.1156Z" />
    </>
  ),
};

export const navigationIcon: LoadedIconFunction = createIcon(
  "navigation",
  iconDefinition,
);
