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
      <path d="M10 2.5C5.37187 2.5 2.5 5.13438 2.5 9.375C2.5 11.5375 3.25 13.2781 4.59375 14.4688L2.5 16.5625L3.125 17.5C4.81875 17.5 6.38438 16.9375 7.64062 15.9875C8.36563 16.1594 9.15312 16.25 10 16.25C14.6281 16.25 17.5 13.6156 17.5 9.375C17.5 5.13438 14.6281 2.5 10 2.5ZM10 5C11.5437 5 12.5 5.95625 12.5 7.5C12.5 9.04375 11.5437 10 10 10C8.45625 10 7.5 9.04375 7.5 7.5C7.5 5.95625 8.45625 5 10 5ZM10 14.375C8.25 14.375 6.86562 13.9344 5.90937 13.1156C6.75938 11.925 8.17188 11.25 10 11.25C11.8281 11.25 13.2406 11.925 14.0906 13.1156C13.1344 13.9344 11.75 14.375 10 14.375Z" />
    </>
  ),
};

export const chatUserIcon: LoadedIconFunction = createIcon(
  "chatUser",
  iconDefinition,
);
