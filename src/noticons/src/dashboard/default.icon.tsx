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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM13.125 13.75H6.875V11.875H13.125V13.75ZM11.1281 10L8.36875 5.85938L6.80938 6.9L8.875 10H4.37813C4.37813 6.89375 6.89687 4.375 10.0031 4.375C13.1094 4.375 15.6281 6.89375 15.6281 10H11.1312H11.1281Z" />
    </>
  ),
};

export const dashboardIcon: LoadedIconFunction = createIcon(
  "dashboard",
  iconDefinition,
);
