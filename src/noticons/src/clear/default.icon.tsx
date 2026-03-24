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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM13.75 12.425L12.425 13.75L10 11.325L7.575 13.75L6.25 12.425L8.675 10L6.25 7.575L7.575 6.25L10 8.675L12.425 6.25L13.75 7.575L11.325 10L13.75 12.425Z" />
    </>
  ),
};

export const clearIcon: LoadedIconFunction = createIcon(
  "clear",
  iconDefinition,
);
