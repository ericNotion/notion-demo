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
      <path d="M16.4031 13.75L6.4125 3.7625C7.29375 2.92812 8.5 2.5 10 2.5C12.6687 2.5 14.4 3.85313 15.0469 6.44063L16.875 13.75H16.4031ZM10 17.5C11.4594 17.5 12.5 16.4594 12.5 15H7.5C7.5 16.4594 8.54063 17.5 10 17.5ZM2.75937 1.875L1.875 2.75937L17.2406 18.125L18.125 17.2406L2.75937 1.875ZM4.71875 7.37187L3.125 13.75H11.0969L4.71875 7.37187Z" />
    </>
  ),
};

export const bellOffIcon: LoadedIconFunction = createIcon(
  "bellOff",
  iconDefinition,
);
