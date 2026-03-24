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
      <path d="M17.5 5.625V14.375H15.625V10.8687L10.1562 14.375H9.0625V10.8687L3.59375 14.375H2.5V5.625H3.59375L9.0625 9.13125V5.625H10.1562L15.625 9.13125V5.625H17.5Z" />
    </>
  ),
};

export const playbackNextIcon: LoadedIconFunction = createIcon(
  "playbackNext",
  iconDefinition,
);
