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
      <path d="M15.625 9.375V10.625L5.625 15.625H4.375V4.375H5.625L15.625 9.375Z" />
    </>
  ),
};

export const playbackPlayIcon: LoadedIconFunction = createIcon(
  "playbackPlay",
  iconDefinition,
);
