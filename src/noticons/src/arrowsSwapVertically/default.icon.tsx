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
      <path d="M18.4375 14.2938L14.375 18.3563L10.3125 14.2938L11.6375 12.9688L13.4375 14.7688V13.75C13.4375 12.0688 12.3062 10.9375 10.625 10.9375H9.375C6.65938 10.9375 4.6875 8.96567 4.6875 6.25005V5.2313L2.8875 7.0313L1.5625 5.7063L5.625 1.6438L9.6875 5.7063L8.3625 7.0313L6.5625 5.2313V6.25005C6.5625 7.9313 7.69375 9.06255 9.375 9.06255H10.625C13.3406 9.06255 15.3125 11.0344 15.3125 13.75V14.7688L17.1125 12.9688L18.4375 14.2938Z" />
    </>
  ),
};

export const arrowsSwapVerticallyIcon: LoadedIconFunction = createIcon(
  "arrowsSwapVertically",
  iconDefinition,
);
