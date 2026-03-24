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
      <path d="M17.5 2.5V12.5H14.375V5.625H7.5V2.5H17.5ZM3.125 6.875H13.125V16.875H3.125V6.875ZM5.9375 10.3125C5.9375 11.6625 6.775 12.5 8.125 12.5C9.475 12.5 10.3125 11.6625 10.3125 10.3125C10.3125 8.9625 9.475 8.125 8.125 8.125C6.775 8.125 5.9375 8.9625 5.9375 10.3125ZM4.42187 15.625H11.825C11.2312 14.2437 9.925 13.4375 8.12187 13.4375C6.31875 13.4375 5.01563 14.2437 4.41875 15.625H4.42187Z" />
    </>
  ),
};

export const tabsUserIcon: LoadedIconFunction = createIcon(
  "tabsUser",
  iconDefinition,
);
