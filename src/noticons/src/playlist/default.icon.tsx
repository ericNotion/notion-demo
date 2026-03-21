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
      <path d="M17.5 4.0625V5.9375H11.875V4.0625H17.5ZM8.75 10.9375H17.5V9.0625H8.75V10.9375ZM8.75 15.9375H17.5V14.0625H8.75V15.9375ZM10.625 6.875V1.875L5 3.28125V11.9844C4.71563 11.9156 4.4 11.875 4.0625 11.875C2.32812 11.875 1.25 12.8313 1.25 14.375C1.25 15.9187 2.32812 16.875 4.0625 16.875C5.79688 16.875 6.875 15.9187 6.875 14.375V7.8125L10.625 6.875Z" />
    </>
  ),
};

export const playlistIcon: LoadedIconFunction = createIcon(
  "playlist",
  iconDefinition,
);
