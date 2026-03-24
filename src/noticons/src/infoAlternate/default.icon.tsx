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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 4.6875C10.8625 4.6875 11.5625 5.3875 11.5625 6.25C11.5625 7.1125 10.8625 7.8125 10 7.8125C9.1375 7.8125 8.4375 7.1125 8.4375 6.25C8.4375 5.3875 9.1375 4.6875 10 4.6875ZM12.5 15H7.5V13.75H8.75V10.3125H7.5V9.0625H11.25V13.75H12.5V15Z" />
    </>
  ),
};

export const infoAlternateIcon: LoadedIconFunction = createIcon(
  "infoAlternate",
  iconDefinition,
);
