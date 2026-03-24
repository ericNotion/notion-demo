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
      <path d="M16.25 10.625H18.125V12.5H16.25V16.875H11.875V12.5H8.125V16.875H3.75V12.5H1.875V10.625H3.75V8.125C2.01875 8.125 0.803125 7.86875 0 7.1875L0.625 5.9375C0.625 5.9375 1.1125 6.25 1.71875 6.25C3.125 6.25 3.75 5.09375 3.75 3.125H16.25C16.25 5.09375 16.875 6.25 18.2812 6.25C18.8875 6.25 19.375 5.9375 19.375 5.9375L20 7.1875C19.1969 7.86875 17.9844 8.125 16.25 8.125V10.625Z" />
    </>
  ),
};

export const templeIcon: LoadedIconFunction = createIcon(
  "temple",
  iconDefinition,
);
