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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM7.34062 14.25L6.78125 13.8438L7.79688 10.7188L5.1375 8.7875L5.35312 8.12813H8.64062L9.65625 5.00313H10.35L11.3656 8.12813H14.6531L14.8688 8.7875L12.2094 10.7188L13.225 13.8438L12.6656 14.25L10.0063 12.3187L7.34688 14.25H7.34062Z" />
    </>
  ),
};

export const tokenIcon: LoadedIconFunction = createIcon(
  "token",
  iconDefinition,
);
