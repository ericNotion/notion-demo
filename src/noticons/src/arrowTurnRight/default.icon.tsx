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
      <path d="M17.575 8.125L11.95 13.75L10.625 12.425L13.9875 9.0625H8.75C6.4375 9.0625 5 10.5 5 12.8125V17.5H3.125V12.8125C3.125 9.34063 5.27813 7.1875 8.75 7.1875H13.9875L10.625 3.825L11.95 2.5L17.575 8.125Z" />
    </>
  ),
};

export const arrowTurnRightIcon: LoadedIconFunction = createIcon(
  "arrowTurnRight",
  iconDefinition,
);
