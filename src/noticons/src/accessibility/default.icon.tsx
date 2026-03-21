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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 4.0625C10.7719 4.0625 11.25 4.54063 11.25 5.3125C11.25 6.08437 10.7719 6.5625 10 6.5625C9.22813 6.5625 8.75 6.08437 8.75 5.3125C8.75 4.54063 9.22813 4.0625 10 4.0625ZM14.375 8.75H11.1719V10.7031L12.8125 15.625H11.3312L10 11.6344L8.66875 15.625H7.1875L8.82812 10.7031V8.75H5.625V7.5H14.375V8.75Z" />
    </>
  ),
};

export const accessibilityIcon: LoadedIconFunction = createIcon(
  "accessibility",
  iconDefinition,
);
