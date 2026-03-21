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
      <path d="M11.5625 5.625V9.375H14.375V11.25H9.6875V5.625H11.5625ZM10.625 2.5C6.48438 2.5 3.125 5.85938 3.125 10V10.7062L1.325 8.90625L0 10.2313L4.0625 14.2938L8.125 10.2313L6.8 8.90625L5 10.7062V10C5 6.89375 7.51875 4.375 10.625 4.375C13.7312 4.375 16.25 6.89375 16.25 10C16.25 13.1062 13.7312 15.625 10.625 15.625V17.5C14.7656 17.5 18.125 14.1406 18.125 10C18.125 5.85938 14.7656 2.5 10.625 2.5Z" />
    </>
  ),
};

export const historyIcon: LoadedIconFunction = createIcon(
  "history",
  iconDefinition,
);
