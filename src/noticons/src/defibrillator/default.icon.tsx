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
      <path d="M13.4375 3.125C11.9 3.125 10.5781 4.05312 10 5.37812C9.42188 4.05312 8.1 3.125 6.5625 3.125C4.31875 3.125 2.5 4.83125 2.5 7.5C2.5 11.8594 7.07812 15.4719 10 17.5C12.9219 15.4719 17.5 11.8594 17.5 7.5C17.5 4.83125 15.6812 3.125 13.4375 3.125ZM13.125 10.625L10.625 14.375H9.375V11.25H6.875V10.625L9.375 6.875H10.625V10H13.125V10.625Z" />
    </>
  ),
};

export const defibrillatorIcon: LoadedIconFunction = createIcon(
  "defibrillator",
  iconDefinition,
);
