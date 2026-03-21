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
      <path d="M17.5 5V17.5H2.5V7.1875L4.0625 5.625V3.75H5.3125V5.625L6.875 7.1875V12.5H8.125V2.5H13.125V10H14.375V5H17.5Z" />
    </>
  ),
};

export const cityIcon: LoadedIconFunction = createIcon("city", iconDefinition);
