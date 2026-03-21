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
      <path d="M16.3156 12.4156C16.475 12.6438 16.5625 12.9344 16.5625 13.2812C16.5625 14.15 16.025 14.6875 15.1562 14.6875H14.9625C15.0875 14.9031 15.1562 15.1625 15.1562 15.4688C15.1562 16.3375 14.6187 16.875 13.75 16.875H8.68125C7.8125 16.875 7.22188 16.7344 6.44375 16.3469L5 15.625H3.125V9.375H5.3125L7.5 5V1.875H8.125C9.28125 1.875 10 2.59375 10 3.75V7.5H15.4688C16.3375 7.5 16.875 8.0375 16.875 8.90625C16.875 9.30625 16.7563 9.63438 16.5469 9.875C16.9531 10.1031 17.1875 10.525 17.1875 11.0938C17.1875 11.7656 16.8625 12.2344 16.3156 12.4156Z" />
    </>
  ),
};

export const thumbsUpIcon: LoadedIconFunction = createIcon(
  "thumbsUp",
  iconDefinition,
);
