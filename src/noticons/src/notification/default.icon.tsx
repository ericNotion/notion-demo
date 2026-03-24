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
      <path d="M15 9.375V13.75C15 16.0625 13.5625 17.5 11.25 17.5H6.25C3.9375 17.5 2.5 16.0625 2.5 13.75V8.75C2.5 6.4375 3.9375 5 6.25 5H10.625C10.625 7.41563 12.5844 9.375 15 9.375ZM15 1.875C13.275 1.875 11.875 3.275 11.875 5C11.875 6.725 13.275 8.125 15 8.125C16.725 8.125 18.125 6.725 18.125 5C18.125 3.275 16.725 1.875 15 1.875Z" />
    </>
  ),
};

export const notificationIcon: LoadedIconFunction = createIcon(
  "notification",
  iconDefinition,
);
