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
      <path d="M17.5 7.5C17.5 11.8594 12.9219 15.4719 10 17.5C7.07812 15.4719 2.5 11.8594 2.5 7.5C2.5 4.83125 4.31875 3.125 6.5625 3.125C8.1 3.125 9.42188 4.05312 10 5.37812C10.5781 4.05312 11.9 3.125 13.4375 3.125C15.6812 3.125 17.5 4.83125 17.5 7.5Z" />
    </>
  ),
};

export const heartIcon: LoadedIconFunction = createIcon(
  "heart",
  iconDefinition,
);
