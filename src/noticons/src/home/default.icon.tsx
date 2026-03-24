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
      <path d="M17.5 10.625H15.3125V16.875H11.5625V11.875H8.4375V16.875H4.6875V10.625H2.5V9.375L10 1.875L12.8125 4.6875V2.5H15.3125V7.1875L17.5 9.375V10.625Z" />
    </>
  ),
};

export const homeIcon: LoadedIconFunction = createIcon("home", iconDefinition);
