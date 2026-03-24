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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM13.675 10.625L10.9375 7.8875V15H9.0625V7.8875L6.325 10.625L5 9.3L10 4.3L15 9.3L13.675 10.625Z" />
    </>
  ),
};

export const arrowUpIcon: LoadedIconFunction = createIcon(
  "arrowUp",
  iconDefinition,
);
