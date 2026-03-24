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
      <path d="M15.625 4.375V15.625H4.375V4.375H15.625Z" />
    </>
  ),
};

export const playbackStopIcon: LoadedIconFunction = createIcon(
  "playbackStop",
  iconDefinition,
);
