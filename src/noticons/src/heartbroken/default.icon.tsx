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
      <path d="M17.5 7.5C17.5 11.8594 12.9219 15.4719 10 17.5C7.07812 15.4719 2.5 11.8594 2.5 7.5C2.5 4.83125 4.31875 3.125 6.5625 3.125C7.54688 3.125 8.44062 3.50625 9.10938 4.125L7.5 7.34375L10.0406 9.88437L9.0125 11.9406L10.1312 12.5L11.5625 9.6375L9.02188 7.09687C9.94375 5.25625 10.9594 3.125 13.4375 3.125C15.6812 3.125 17.5 4.83125 17.5 7.5Z" />
    </>
  ),
};

export const heartbrokenIcon: LoadedIconFunction = createIcon(
  "heartbroken",
  iconDefinition,
);
