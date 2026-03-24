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
      <path d="M17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5L10.475 3.45313C8.73438 4.1375 7.5 5.82812 7.5 7.8125C7.5 10.4 9.6 12.5 12.1875 12.5C14.1719 12.5 15.8625 11.2656 16.5469 9.525L17.5 10Z" />
    </>
  ),
};

export const moonIcon: LoadedIconFunction = createIcon("moon", iconDefinition);
