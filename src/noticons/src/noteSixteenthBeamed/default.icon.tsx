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
      <path d="M16.25 4.53125L5.625 1.875V11.0469C5.34063 10.9781 5.025 10.9375 4.6875 10.9375C2.95312 10.9375 1.875 11.8938 1.875 13.4375C1.875 14.9812 2.95312 15.9375 4.6875 15.9375C6.42188 15.9375 7.5 14.9812 7.5 13.4375V7.96875L14.375 9.6875V13.2344C14.0906 13.1656 13.775 13.125 13.4375 13.125C11.7031 13.125 10.625 14.0813 10.625 15.625C10.625 17.1687 11.7031 18.125 13.4375 18.125C15.1719 18.125 16.25 17.1687 16.25 15.625V4.53125ZM7.5 6.0375V4.27812L14.375 5.99688V7.75625L7.5 6.0375Z" />
    </>
  ),
};

export const noteSixteenthBeamedIcon: LoadedIconFunction = createIcon(
  "noteSixteenthBeamed",
  iconDefinition,
);
