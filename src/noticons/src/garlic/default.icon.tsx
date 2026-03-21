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
      <path d="M11.25 3.75V2.5H8.75V3.75C8.75 6.875 2.5 7.08437 2.5 11.875C2.5 14.1875 3.9375 15.625 6.25 15.625H6.64375C7.21875 16.8125 8.4 17.5 10 17.5C11.6 17.5 12.7781 16.8125 13.3563 15.625H13.75C16.0625 15.625 17.5 14.1875 17.5 11.875C17.5 7.08437 11.25 6.875 11.25 3.75Z" />
    </>
  ),
};

export const garlicIcon: LoadedIconFunction = createIcon(
  "garlic",
  iconDefinition,
);
