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
      <path d="M16.25 12.5V5.625H13.75V3.75C13.75 2.20625 12.7937 1.25 11.25 1.25H8.75C7.20625 1.25 6.25 2.20625 6.25 3.75V5.625H3.75V12.5L2.5 17.5H17.5L16.25 12.5ZM8.125 3.75C8.125 3.24063 8.24062 3.125 8.75 3.125H11.25C11.7594 3.125 11.875 3.24063 11.875 3.75V5.625H8.125V3.75Z" />
    </>
  ),
};

export const shoppingBagIcon: LoadedIconFunction = createIcon(
  "shoppingBag",
  iconDefinition,
);
