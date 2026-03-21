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
      <path d="M7.8875 8.75L11.95 12.8125L7.8875 16.875L6.5625 15.55L8.3625 13.75H5.9375C3.28125 13.75 1.5625 12.0312 1.5625 9.375C1.5625 6.71875 3.28125 5 5.9375 5H8.75V6.875H5.9375C4.325 6.875 3.4375 7.7625 3.4375 9.375C3.4375 10.9875 4.325 11.875 5.9375 11.875H8.3625L6.5625 10.075L7.8875 8.75ZM15.625 3.125H10V8.75H15.625V3.125ZM12.5 10V15.625H18.125V10H12.5Z" />
    </>
  ),
};

export const dependencyIcon: LoadedIconFunction = createIcon(
  "dependency",
  iconDefinition,
);
