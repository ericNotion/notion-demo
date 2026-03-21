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
      <path d="M14.6875 7.5L10.9375 8.4375V15C10.9375 16.5437 9.85938 17.5 8.125 17.5C6.39062 17.5 5.3125 16.5437 5.3125 15C5.3125 13.4563 6.39062 12.5 8.125 12.5C8.4625 12.5 8.77813 12.5375 9.0625 12.6094V3.90625L14.6875 2.5V7.5Z" />
    </>
  ),
};

export const noteEighthIcon: LoadedIconFunction = createIcon(
  "noteEighth",
  iconDefinition,
);
