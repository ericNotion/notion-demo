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
      <path d="M9.6875 2.5V12.0563C9.31563 11.9375 8.9 11.875 8.4375 11.875C6.50937 11.875 5.3125 12.9531 5.3125 14.6875C5.3125 16.4219 6.50937 17.5 8.4375 17.5C10.3656 17.5 11.5625 16.4219 11.5625 14.6875V2.5H9.6875ZM8.125 15.9375C7.49062 15.9375 7.1875 15.6344 7.1875 15C7.1875 14.1187 7.86875 13.4375 8.75 13.4375C9.38438 13.4375 9.6875 13.7406 9.6875 14.375C9.6875 15.2563 9.00625 15.9375 8.125 15.9375Z" />
    </>
  ),
};

export const noteHalfIcon: LoadedIconFunction = createIcon(
  "noteHalf",
  iconDefinition,
);
