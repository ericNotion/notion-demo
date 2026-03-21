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
      <path d="M18.125 5V9.375C14.85 10.1094 12.6094 12.35 11.875 15.625H8.125C7.39062 12.35 5.15 10.1094 1.875 9.375V5H18.125Z" />
    </>
  ),
};

export const underwearIcon: LoadedIconFunction = createIcon(
  "underwear",
  iconDefinition,
);
