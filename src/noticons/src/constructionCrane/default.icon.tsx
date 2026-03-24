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
      <path d="M18.75 6.875V5H8.125V3.75L7.5 1.25H6.25L5.625 3.75V5H1.25V6.875H2.5V8.75H4.375V6.875H5.625V14.375L3.75 15.625V17.5H10V15.625L8.125 14.375V6.875H16.25V10L15 11.25V12.5H18.75V11.25L17.5 10V6.875H18.75Z" />
    </>
  ),
};

export const constructionCraneIcon: LoadedIconFunction = createIcon(
  "constructionCrane",
  iconDefinition,
);
