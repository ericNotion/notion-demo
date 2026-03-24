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
      <path d="M7.8125 13.75H13.75V15.625H7.8125C4.7125 15.625 2.5 13.4125 2.5 10.3125C2.5 7.2125 4.7125 5 7.8125 5H14.1437L12.3438 3.2L13.6688 1.875L17.7313 5.9375L13.6688 10L12.3438 8.675L14.1437 6.875H7.8125C5.80625 6.875 4.375 8.30625 4.375 10.3125C4.375 12.3188 5.80625 13.75 7.8125 13.75Z" />
    </>
  ),
};

export const redoIcon: LoadedIconFunction = createIcon("redo", iconDefinition);
