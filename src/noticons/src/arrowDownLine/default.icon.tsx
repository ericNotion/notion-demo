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
      <path d="M10 14.45L5 9.45L6.325 8.125L9.0625 10.8625V1.875H10.9375V10.8625L13.675 8.125L15 9.45L10 14.45ZM3.125 15.625V17.5H16.875V15.625H3.125Z" />
    </>
  ),
};

export const arrowDownLineIcon: LoadedIconFunction = createIcon(
  "arrowDownLine",
  iconDefinition,
);
