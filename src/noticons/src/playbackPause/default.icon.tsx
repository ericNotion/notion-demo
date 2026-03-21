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
      <path d="M4.375 4.375H8.75V15.625H4.375V4.375ZM11.25 4.375V15.625H15.625V4.375H11.25Z" />
    </>
  ),
};

export const playbackPauseIcon: LoadedIconFunction = createIcon(
  "playbackPause",
  iconDefinition,
);
