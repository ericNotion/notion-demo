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
      <path d="M18.125 10.9375H9.1375L11.875 13.675L10.55 15L5.55 10L10.55 5L11.875 6.325L9.1375 9.0625H18.125V10.9375ZM2.5 16.875H4.375V3.125H2.5V16.875Z" />
    </>
  ),
};

export const arrowLeftLineIcon: LoadedIconFunction = createIcon(
  "arrowLeftLine",
  iconDefinition,
);
