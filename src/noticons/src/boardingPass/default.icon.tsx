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
      <path d="M15.625 4.375H13.75V6.25H12.5V4.375H4.375C2.83125 4.375 1.875 5.33125 1.875 6.875V13.125C1.875 14.6687 2.83125 15.625 4.375 15.625H12.5V13.75H13.75V15.625H15.625C17.1687 15.625 18.125 14.6687 18.125 13.125V6.875C18.125 5.33125 17.1687 4.375 15.625 4.375ZM11.5625 11.5625L8.4375 10.7812V12.5L9.6875 13.125V14.0625L7.5 13.5156L5.3125 14.0625V13.125L6.5625 12.5V10.7812L3.4375 11.5625V10.3125L6.5625 8.75V7.5C6.5625 6.44062 6.92188 5.9375 7.5 5.9375C8.07812 5.9375 8.4375 6.44062 8.4375 7.5V8.75L11.5625 10.3125V11.5625Z" />
    </>
  ),
};

export const boardingPassIcon: LoadedIconFunction = createIcon(
  "boardingPass",
  iconDefinition,
);
