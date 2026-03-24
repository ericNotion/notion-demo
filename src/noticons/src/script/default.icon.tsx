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
      <path d="M4.375 11.3344L3.375 13.75H2.875L1.875 11.3344V2.5H4.375V11.3344ZM10 3.125C7.6875 3.125 6.25 4.5625 6.25 6.875V13.75C6.25 14.9062 5.53125 15.625 4.375 15.625H3.75V17.5H11.875C14.1875 17.5 15.625 16.0625 15.625 13.75V6.875C15.625 5.71875 16.3438 5 17.5 5H18.125V3.125H10Z" />
    </>
  ),
};

export const scriptIcon: LoadedIconFunction = createIcon(
  "script",
  iconDefinition,
);
