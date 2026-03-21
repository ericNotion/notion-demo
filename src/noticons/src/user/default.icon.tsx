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
      <path d="M6.5625 5.9375C6.5625 3.81562 7.87813 2.5 10 2.5C12.1219 2.5 13.4375 3.81562 13.4375 5.9375C13.4375 8.05937 12.1219 9.375 10 9.375C7.87813 9.375 6.5625 8.05937 6.5625 5.9375ZM10 10.625C5.75938 10.625 3.125 13.2594 3.125 17.5H16.875C16.875 13.2594 14.2406 10.625 10 10.625Z" />
    </>
  ),
};

export const userIcon: LoadedIconFunction = createIcon("user", iconDefinition);
