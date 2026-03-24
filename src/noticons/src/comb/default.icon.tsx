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
      <path d="M9.375 4.375V5H14.375V6.875H9.375V8.125H14.375V10H9.375V11.25H14.375V13.125H10.625C9.85313 13.125 9.375 13.6031 9.375 14.375V18.125H6.25V4.375C6.25 2.83125 7.20625 1.875 8.75 1.875H14.375V3.75H10C9.61562 3.75 9.375 3.99062 9.375 4.375Z" />
    </>
  ),
};

export const combIcon: LoadedIconFunction = createIcon("comb", iconDefinition);
