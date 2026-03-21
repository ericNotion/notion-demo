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
      <path d="M18.3625 8.55937L17.6125 6.25H12.725L11.2031 1.5625H8.80002L7.27815 6.25H2.32502L1.58752 8.525L5.59065 11.4344L4.09377 16.0406L6.08127 17.4844L10 14.6375L13.8781 17.4563L15.8906 15.9937L14.4094 11.4344L18.3625 8.5625V8.55937ZM10 12.3187L6.4344 14.9094L7.7969 10.7156L4.22815 8.125H8.63752L10 3.93125V12.3187Z" />
    </>
  ),
};

export const starHalfIcon: LoadedIconFunction = createIcon(
  "starHalf",
  iconDefinition,
);
