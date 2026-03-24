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
      <path d="M16.25 11.875V17.5H3.75V11.875C3.75 9.5625 5.1875 8.125 7.5 8.125V5.625H8.75V1.875H11.3188C12.1875 1.875 12.7781 2.01563 13.5563 2.40313L15 3.125V4.375H11.25V5.625H12.5V8.125C14.8125 8.125 16.25 9.5625 16.25 11.875Z" />
    </>
  ),
};

export const pumpBottleIcon: LoadedIconFunction = createIcon(
  "pumpBottle",
  iconDefinition,
);
