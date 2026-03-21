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
      <path d="M11.875 8.4375C11.875 7.575 12.575 6.875 13.4375 6.875C14.3 6.875 15 7.575 15 8.4375C15 9.3 14.3 10 13.4375 10C12.575 10 11.875 9.3 11.875 8.4375ZM18.125 3.75V16.25H1.875V3.75H18.125ZM16.25 5.625H3.75V13.75L8.125 9.375H9.375L14.375 14.375H16.25V5.625Z" />
    </>
  ),
};

export const photoLandscapeIcon: LoadedIconFunction = createIcon(
  "photoLandscape",
  iconDefinition,
);
