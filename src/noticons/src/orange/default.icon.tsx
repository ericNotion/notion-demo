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
      <path d="M16.5625 11.5625C16.5625 15.1875 13.625 18.125 10 18.125C6.375 18.125 3.4375 15.1875 3.4375 11.5625C3.4375 8.25625 5.88438 5.53125 9.0625 5.075V4.375H6.875C5.33125 4.375 4.375 3.41875 4.375 1.875H8.4375C9.98125 1.875 10.9375 2.83125 10.9375 4.375V5.075C14.1156 5.53125 16.5625 8.25625 16.5625 11.5625Z" />
    </>
  ),
};

export const orangeIcon: LoadedIconFunction = createIcon(
  "orange",
  iconDefinition,
);
