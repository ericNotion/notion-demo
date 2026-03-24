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
      <path d="M15.625 8.125C14.6625 8.125 14.0625 8.725 14.0625 9.6875V12.5H12.5V4.375C12.5 2.83125 11.5437 1.875 10 1.875C8.45625 1.875 7.5 2.83125 7.5 4.375V9.375H5.9375V6.5625C5.9375 5.6 5.3375 5 4.375 5C3.4125 5 2.8125 5.6 2.8125 6.5625V9.6875C2.8125 11.4187 3.89375 12.5 5.625 12.5H7.5V17.5H12.5V15.625H14.375C16.1062 15.625 17.1875 14.5437 17.1875 12.8125V9.6875C17.1875 8.725 16.5875 8.125 15.625 8.125Z" />
    </>
  ),
};

export const cactusIcon: LoadedIconFunction = createIcon(
  "cactus",
  iconDefinition,
);
