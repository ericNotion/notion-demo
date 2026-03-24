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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM11.25 14.6875H8.75V12.8125H11.25V14.6875ZM10.9375 11.5625H9.0625C9.0625 9.375 11.4062 9.43437 11.4062 8.28125C11.4062 7.5375 10.8719 7.1875 9.92188 7.1875C8.97188 7.1875 8.4375 7.5375 8.4375 8.4375H6.5625C6.5625 6.525 7.87813 5.3125 10 5.3125C12.1219 5.3125 13.4375 6.525 13.4375 8.28125C13.4375 10.4688 10.9375 10.4094 10.9375 11.5625Z" />
    </>
  ),
};

export const helpAlternateIcon: LoadedIconFunction = createIcon(
  "helpAlternate",
  iconDefinition,
);
