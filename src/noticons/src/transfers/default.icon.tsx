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
      <path d="M9.3 15.9375L10.625 14.6125L8.825 12.8125H16.9531C15.8406 15.5594 13.1469 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 9.68125 2.52187 9.36875 2.55937 9.0625H15.7L10.7 4.0625L9.375 5.3875L11.175 7.1875H3.04688C4.15937 4.44062 6.85313 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10C17.5 10.3187 17.4781 10.6313 17.4406 10.9375H4.3L9.3 15.9375Z" />
    </>
  ),
};

export const transfersIcon: LoadedIconFunction = createIcon(
  "transfers",
  iconDefinition,
);
