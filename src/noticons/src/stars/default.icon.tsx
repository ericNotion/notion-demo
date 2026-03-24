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
      <path d="M18.125 7.1875L14.875 8L14.0625 11.25H13.4375L12.625 8L9.375 7.1875V6.5625L12.625 5.75L13.4375 2.5H14.0625L14.875 5.75L18.125 6.5625V7.1875ZM6.875 9.0625V8.4375L5.125 8L4.6875 6.25H4.0625L3.625 8L1.875 8.4375V9.0625L3.625 9.5L4.0625 11.25H4.6875L5.125 9.5L6.875 9.0625ZM9.6875 11.25H9.0625L8.5 13.5L6.25 14.0625V14.6875L8.5 15.25L9.0625 17.5H9.6875L10.25 15.25L12.5 14.6875V14.0625L10.25 13.5L9.6875 11.25Z" />
    </>
  ),
};

export const starsIcon: LoadedIconFunction = createIcon(
  "stars",
  iconDefinition,
);
