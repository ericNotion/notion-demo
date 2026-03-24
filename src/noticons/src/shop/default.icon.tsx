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
      <path d="M17.5 5V6.5625C17.5 8.11562 16.2406 9.375 14.6875 9.375C13.7094 9.375 12.8469 8.875 12.3438 8.11562C11.8406 8.875 10.9781 9.375 10 9.375C9.02187 9.375 8.15938 8.875 7.65625 8.11562C7.15312 8.875 6.29063 9.375 5.3125 9.375C3.75938 9.375 2.5 8.11562 2.5 6.5625V5L3.75 2.5H16.25L17.5 5ZM14.375 13.75H5.625V10.625H3.75V17.5H16.25V10.625H14.375V13.75Z" />
    </>
  ),
};

export const shopIcon: LoadedIconFunction = createIcon("shop", iconDefinition);
