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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 15.7L5 10.7L6.325 9.375L9.0625 12.1125V5H10.9375V12.1125L13.675 9.375L15 10.7L10 15.7Z" />
    </>
  ),
};

export const arrowDownIcon: LoadedIconFunction = createIcon(
  "arrowDown",
  iconDefinition,
);
