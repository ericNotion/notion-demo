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
      <path d="M16.25 6.25C16.25 8.99375 14.375 10.625 11.25 13.75H8.75C5.625 10.625 3.75 8.99375 3.75 6.25C3.75 3.50625 5.93125 1.25 10 1.25C14.0688 1.25 16.25 3.5375 16.25 6.25ZM8.125 17.5H11.875V15H8.125V17.5Z" />
    </>
  ),
};

export const hotAirBalloonIcon: LoadedIconFunction = createIcon(
  "hotAirBalloon",
  iconDefinition,
);
