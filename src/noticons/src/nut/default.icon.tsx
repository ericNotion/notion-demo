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
      <path d="M13.2625 3.75H6.73437C4.05 3.75 1.87187 5.925 1.87187 8.6125C1.87187 9.90312 2.38437 11.1375 3.29687 12.05L8.74687 17.5H11.2469L16.6969 12.05C17.6094 11.1375 18.1219 9.90312 18.1219 8.6125C18.1219 5.92812 15.9469 3.75 13.2594 3.75H13.2625ZM10 8.75C6.10312 8.75 4.27812 6.91875 4.27812 6.91875C4.81875 6.1375 5.71562 5.625 6.73437 5.625H13.2625C14.2812 5.625 15.1812 6.1375 15.7187 6.91875C15.7187 6.91875 13.8937 8.75 9.99687 8.75H10Z" />
    </>
  ),
};

export const nutIcon: LoadedIconFunction = createIcon("nut", iconDefinition);
