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
      <path d="M14.2719 14.375L16.25 2.5H3.75L5.72812 14.375H14.2688H14.2719ZM14.0375 4.375L13.6219 6.875H6.38125L5.96563 4.375H14.0375ZM3.75 15.625H16.25V17.5H3.75V15.625Z" />
    </>
  ),
};

export const coasterIcon: LoadedIconFunction = createIcon(
  "coaster",
  iconDefinition,
);
