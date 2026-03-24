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
      <path d="M16.875 12.8125V17.5H15V12.8125C15 10.5 13.5625 9.0625 11.25 9.0625H6.01249L9.37499 12.425L8.04999 13.75L2.42499 8.125L8.04999 2.5L9.37499 3.825L6.01249 7.1875H11.25C14.7219 7.1875 16.875 9.34063 16.875 12.8125Z" />
    </>
  ),
};

export const arrowTurnLeftIcon: LoadedIconFunction = createIcon(
  "arrowTurnLeft",
  iconDefinition,
);
