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
      <path d="M16.25 15.625V17.5H3.75V15.625H5.72812L6.875 8.75L4.375 6.25V2.5H6.25V4.375H8.75V2.5H11.25V4.375H13.75V2.5H15.625V6.25L13.125 8.75L14.2719 15.625H16.25Z" />
    </>
  ),
};

export const chessRookIcon: LoadedIconFunction = createIcon(
  "chessRook",
  iconDefinition,
);
