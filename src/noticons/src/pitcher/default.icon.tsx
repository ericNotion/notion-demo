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
      <path d="M16.875 6.875H16.1469L16.5625 4.375H9.375L7.5 2.5H1.25V3.75L2.61562 5.11563C3.4375 5.9375 3.82188 6.68125 4.0125 7.82812L5.625 17.4969H14.375L15 13.7469H16.875C18.4188 13.7469 19.375 12.7906 19.375 11.2469V9.37187C19.375 7.82812 18.4188 6.87187 16.875 6.87187V6.875ZM6.72188 4.375L8.59688 6.25H14.3469L13.9313 8.75H6.06563L5.8625 7.52187C5.65 6.25 5.23438 5.29063 4.475 4.375H6.72188ZM17.5 11.25C17.5 11.7594 17.3844 11.875 16.875 11.875H15.3125L15.8344 8.75H16.875C17.3844 8.75 17.5 8.86562 17.5 9.375V11.25Z" />
    </>
  ),
};

export const pitcherIcon: LoadedIconFunction = createIcon(
  "pitcher",
  iconDefinition,
);
