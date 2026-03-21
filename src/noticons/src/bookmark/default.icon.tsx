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
      <path d="M15 5V17.5H13.75L10 13.75L6.25 17.5H5V5C5 3.45625 5.95625 2.5 7.5 2.5H12.5C14.0437 2.5 15 3.45625 15 5Z" />
    </>
  ),
};

export const bookmarkIcon: LoadedIconFunction = createIcon(
  "bookmark",
  iconDefinition,
);
