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
      <path d="M17.5 10.9375C17.5 13.0094 15.8219 14.6875 13.75 14.6875C12.6281 14.6875 11.625 14.1937 10.9375 13.4125V13.4563C10.9375 14.4031 11.4719 15.2688 12.3187 15.6938L13.4375 16.2531V17.5031H6.5625V16.2531L7.68125 15.6938C8.52812 15.2688 9.0625 14.4031 9.0625 13.4563V13.4125C8.375 14.1937 7.37187 14.6875 6.25 14.6875C4.17812 14.6875 2.5 13.0094 2.5 10.9375C2.5 7.11563 7.1875 4.0625 9.375 1.875H10.625C12.8125 4.0625 17.5 7.11563 17.5 10.9375Z" />
    </>
  ),
};

export const suitSpadeIcon: LoadedIconFunction = createIcon(
  "suitSpade",
  iconDefinition,
);
