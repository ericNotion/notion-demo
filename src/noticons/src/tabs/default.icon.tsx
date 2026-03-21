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
      <path d="M17.5 2.5V12.5H14.375V5.625H7.5V2.5H17.5ZM3.125 16.875H13.125V6.875H3.125V16.875Z" />
    </>
  ),
};

export const tabsIcon: LoadedIconFunction = createIcon("tabs", iconDefinition);
