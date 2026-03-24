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
      <path d="M17.5 11.875V16.25H15.625V13.75H4.375V16.25H2.5V8.125C1.34375 8.125 0.625 7.40625 0.625 6.25C0.625 5.09375 1.34375 4.375 2.5 4.375C3.29375 4.375 3.82187 4.70312 4.17812 5.4125L6.15937 9.375H15C16.5437 9.375 17.5 10.3313 17.5 11.875Z" />
    </>
  ),
};

export const loungeIcon: LoadedIconFunction = createIcon(
  "lounge",
  iconDefinition,
);
