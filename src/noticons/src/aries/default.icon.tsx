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
      <path d="M17.5 6.71875C17.5 9.04375 15.6062 10.9375 13.2812 10.9375H12.8125V9.0625H13.2812C14.575 9.0625 15.625 8.0125 15.625 6.71875C15.625 5.425 14.575 4.375 13.2812 4.375C11.9875 4.375 10.9375 5.425 10.9375 6.71875V17.5H9.0625V6.71875C9.0625 5.425 8.0125 4.375 6.71875 4.375C5.425 4.375 4.375 5.425 4.375 6.71875C4.375 8.0125 5.425 9.0625 6.71875 9.0625H7.1875V10.9375H6.71875C4.39375 10.9375 2.5 9.04375 2.5 6.71875C2.5 4.39375 4.39375 2.5 6.71875 2.5C8.04375 2.5 9.225 3.11562 10 4.07187C10.775 3.1125 11.9563 2.5 13.2812 2.5C15.6062 2.5 17.5 4.39375 17.5 6.71875Z" />
    </>
  ),
};

export const ariesIcon: LoadedIconFunction = createIcon(
  "aries",
  iconDefinition,
);
