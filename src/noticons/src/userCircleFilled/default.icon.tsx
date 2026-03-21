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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 5.625C11.5437 5.625 12.5 6.58125 12.5 8.125C12.5 9.66875 11.5437 10.625 10 10.625C8.45625 10.625 7.5 9.66875 7.5 8.125C7.5 6.58125 8.45625 5.625 10 5.625ZM10 15.625C8.3625 15.625 6.89062 14.9219 5.8625 13.8031C6.70937 12.575 8.1375 11.875 10 11.875C11.8625 11.875 13.2906 12.575 14.1375 13.8031C13.1094 14.9219 11.6406 15.625 10 15.625Z" />
    </>
  ),
};

export const userCircleFilledIcon: LoadedIconFunction = createIcon(
  "userCircleFilled",
  iconDefinition,
);
