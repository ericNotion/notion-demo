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
      <path d="M10.5406 2.5H9.45937L1.7 15.9375C1.94063 16.3531 2 16.4594 2.24063 16.875H17.7563C17.9969 16.4594 18.0562 16.3531 18.2969 15.9375L10.5406 2.5ZM11.25 15.625H8.75V13.75H11.25V15.625ZM11.25 10L10.625 12.5H9.375L8.75 10V6.25H11.25V10Z" />
    </>
  ),
};

export const warningIcon: LoadedIconFunction = createIcon(
  "warning",
  iconDefinition,
);
