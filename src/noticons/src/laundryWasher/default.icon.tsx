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
      <path d="M6.875 11.25H13.125C13.125 12.975 11.725 14.375 10 14.375C8.275 14.375 6.875 12.975 6.875 11.25ZM16.25 2.5V17.5H3.75V2.5H16.25ZM14.375 11.25C14.375 8.83437 12.4156 6.875 10 6.875C7.58437 6.875 5.625 8.83437 5.625 11.25C5.625 13.6656 7.58437 15.625 10 15.625C12.4156 15.625 14.375 13.6656 14.375 11.25ZM14.375 5.3125C14.375 4.79375 13.9563 4.375 13.4375 4.375C12.9187 4.375 12.5 4.79375 12.5 5.3125C12.5 5.83125 12.9187 6.25 13.4375 6.25C13.9563 6.25 14.375 5.83125 14.375 5.3125Z" />
    </>
  ),
};

export const laundryWasherIcon: LoadedIconFunction = createIcon(
  "laundryWasher",
  iconDefinition,
);
