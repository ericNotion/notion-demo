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
      <path d="M13.75 10H17.0062C15.7469 13.2312 12.3406 15.875 10 17.5C7.65938 15.875 4.25313 13.2312 2.99375 10H6.25V11.875H7.5L9.375 10H10.625L12.5 11.875H13.75V10ZM13.4375 3.125C11.9 3.125 10.5781 4.05312 10 5.37812C9.42188 4.05312 8.1 3.125 6.5625 3.125C4.31875 3.125 2.5 4.83125 2.5 7.5C2.5 7.70937 2.5125 7.91875 2.53437 8.125H6.25V6.25H7.5L9.375 8.125H10.625L12.5 6.25H13.75V8.125H17.4656C17.4875 7.91875 17.5 7.70937 17.5 7.5C17.5 4.83125 15.6812 3.125 13.4375 3.125Z" />
    </>
  ),
};

export const heartBoxBowIcon: LoadedIconFunction = createIcon(
  "heartBoxBow",
  iconDefinition,
);
