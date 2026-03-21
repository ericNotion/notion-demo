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
      <path d="M18.75 6.25V7.82188C18.75 8.93438 18.4375 9.6875 17.6531 10.475L15.2094 12.9187L15.8563 14.2094C16.1469 14.7906 16.2531 15.2375 16.2531 15.8875V16.2531H13.7531L12.5031 13.7531H6.25313L5.00313 16.2531H2.50313V15.8875C2.50313 15.2375 2.60938 14.7938 2.9 14.2094L3.3375 13.3344L1.25313 11.25V10C1.25313 10 3.12813 5 8.12813 5C12.4875 5 14.3781 8.125 14.3781 8.125L16.2531 6.25H18.7531H18.75Z" />
    </>
  ),
};

export const tortoiseIcon: LoadedIconFunction = createIcon(
  "tortoise",
  iconDefinition,
);
