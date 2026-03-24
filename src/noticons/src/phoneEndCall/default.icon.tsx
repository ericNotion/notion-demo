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
      <path d="M18.75 10.5906V12.8125H13.4375V9.375C13.1031 9.09063 12.0063 8.4375 10 8.4375C7.99375 8.4375 6.89687 9.09063 6.5625 9.375V12.8125H1.25V10.5906C1.25 7.81562 5.54688 5.9375 10 5.9375C14.4531 5.9375 18.75 7.79375 18.75 10.5906Z" />
    </>
  ),
};

export const phoneEndCallIcon: LoadedIconFunction = createIcon(
  "phoneEndCall",
  iconDefinition,
);
