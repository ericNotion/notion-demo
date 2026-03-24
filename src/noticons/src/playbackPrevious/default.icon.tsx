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
      <path d="M17.5 5.625V14.375H16.4062L10.9375 10.8687V14.375H9.84375L4.375 10.8687V14.375H2.5V5.625H4.375V9.13125L9.84375 5.625H10.9375V9.13125L16.4062 5.625H17.5Z" />
    </>
  ),
};

export const playbackPreviousIcon: LoadedIconFunction = createIcon(
  "playbackPrevious",
  iconDefinition,
);
