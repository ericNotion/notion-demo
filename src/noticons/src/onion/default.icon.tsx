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
      <path d="M16.6156 5.15312C15.7937 5.975 15.625 6.5875 15.625 7.5C15.625 8.66875 16.25 10.3125 16.25 11.875C16.25 15.2344 13.6719 17.5 10.3125 17.5C8.37187 17.5 7.23438 16.5625 6.25 16.5625C5.26562 16.5625 4.89375 16.875 4.89375 16.875L3.125 15.1062C3.125 15.1062 3.4375 14.6875 3.4375 13.75C3.4375 12.7656 2.5 11.6281 2.5 9.6875C2.5 6.32812 4.76562 3.75 8.125 3.75C9.6875 3.75 11.3313 4.375 12.5 4.375C13.4156 4.375 14.025 4.20625 14.8469 3.38437L15.7312 2.5L17.5 4.26875L16.6156 5.15312Z" />
    </>
  ),
};

export const onionIcon: LoadedIconFunction = createIcon(
  "onion",
  iconDefinition,
);
