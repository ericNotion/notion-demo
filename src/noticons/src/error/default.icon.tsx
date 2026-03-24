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
      <path d="M13.1062 2.5H6.89375L2.5 6.89375V13.1062L6.89375 17.5H13.1062L17.5 13.1062V6.89375L13.1062 2.5ZM11.25 15H8.75V13.125H11.25V15ZM11.25 9.375L10.625 11.875H9.375L8.75 9.375V5.625H11.25V9.375Z" />
    </>
  ),
};

export const errorIcon: LoadedIconFunction = createIcon(
  "error",
  iconDefinition,
);
