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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM11.25 14.6875H8.75V12.8125H11.25V14.6875ZM13.125 11.5625H6.875V9.6875H13.125V11.5625ZM15 8.4375H5V6.5625H15V8.4375Z" />
    </>
  ),
};

export const filteredIcon: LoadedIconFunction = createIcon(
  "filtered",
  iconDefinition,
);
