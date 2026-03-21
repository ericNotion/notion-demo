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
      <path d="M13.3406 5.30312L12.7875 6.13125C14.5031 7.31563 15.625 8.50938 15.625 10.625C15.625 12.4062 13.925 14.1875 10 14.3594V16.25H11.875V17.5H8.75V14.35C4.7625 14.075 2.5 11.25 2.5 11.25V10L8.125 8.125H11.25C11.25 7.00625 9.375 6.03438 9.375 4.21875C9.375 2.925 10.425 1.875 11.7188 1.875C12.9031 1.875 13.8781 2.75312 14.0375 3.89062L16.5625 5.575L15.6969 6.875L13.3406 5.30312Z" />
    </>
  ),
};

export const duckIcon: LoadedIconFunction = createIcon("duck", iconDefinition);
