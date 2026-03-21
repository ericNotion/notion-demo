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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM12.8125 10.9375H7.1875C5.97813 10.9375 5 9.95937 5 8.75C5 7.54063 5.97813 6.5625 7.1875 6.5625H12.8125C14.0219 6.5625 15 7.54063 15 8.75C15 9.95937 14.0219 10.9375 12.8125 10.9375ZM7.1875 7.8125H11.875V9.6875H7.1875C6.67188 9.6875 6.25 9.26562 6.25 8.75C6.25 8.23438 6.67188 7.8125 7.1875 7.8125Z" />
    </>
  ),
};

export const buttonIcon: LoadedIconFunction = createIcon(
  "button",
  iconDefinition,
);
