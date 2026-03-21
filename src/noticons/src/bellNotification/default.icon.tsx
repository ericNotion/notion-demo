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
      <path d="M7.5 15H12.5C12.5 16.4594 11.4594 17.5 10 17.5C8.54063 17.5 7.5 16.4594 7.5 15ZM15 9.375C12.5844 9.375 10.625 7.41563 10.625 5C10.625 4.125 10.8844 3.3125 11.3281 2.62812C10.9156 2.54375 10.475 2.5 10 2.5C7.33125 2.5 5.6 3.85313 4.95313 6.44063L3.125 13.75H16.875L15.7625 9.30313C15.5156 9.34688 15.2594 9.375 15 9.375ZM15 1.875C13.275 1.875 11.875 3.275 11.875 5C11.875 6.725 13.275 8.125 15 8.125C16.725 8.125 18.125 6.725 18.125 5C18.125 3.275 16.725 1.875 15 1.875Z" />
    </>
  ),
};

export const bellNotificationIcon: LoadedIconFunction = createIcon(
  "bellNotification",
  iconDefinition,
);
