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
      <path d="M16.25 8.85V8.75C16.25 5.27813 14.0969 3.125 10.625 3.125C7.59062 3.125 5.5625 4.77188 5.1 7.50938C2.71875 7.59688 1.25 9.12813 1.25 11.5625C1.25 13.9969 2.80625 15.625 5.3125 15.625H15.3125C17.4344 15.625 18.75 14.3094 18.75 12.1875C18.75 10.4 17.8125 9.1875 16.25 8.85ZM13.4375 12.425L12.1125 13.75L10 11.6375L7.8875 13.75L6.5625 12.425L8.675 10.3125L6.5625 8.2L7.8875 6.875L10 8.9875L12.1125 6.875L13.4375 8.2L11.325 10.3125L13.4375 12.425Z" />
    </>
  ),
};

export const cloudNoIcon: LoadedIconFunction = createIcon(
  "cloudNo",
  iconDefinition,
);
