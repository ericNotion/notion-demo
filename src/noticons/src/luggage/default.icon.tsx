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
      <path d="M13.75 5.625V3.125C13.75 1.58125 12.7937 0.625 11.25 0.625H8.75C7.20625 0.625 6.25 1.58125 6.25 3.125V5.625H4.375V18.125H6.25V19.375H8.125V18.125H11.875V19.375H13.75V18.125H15.625V5.625H13.75ZM8.125 3.125C8.125 2.61563 8.24062 2.5 8.75 2.5H11.25C11.7594 2.5 11.875 2.61563 11.875 3.125V5.625H8.125V3.125ZM13.75 10.625H6.25V9.375H13.75V10.625Z" />
    </>
  ),
};

export const luggageIcon: LoadedIconFunction = createIcon(
  "luggage",
  iconDefinition,
);
