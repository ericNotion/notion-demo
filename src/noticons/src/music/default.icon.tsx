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
      <path d="M16.25 1.875V13.4375C16.25 14.9812 15.1719 15.9375 13.4375 15.9375C11.7031 15.9375 10.625 14.9812 10.625 13.4375C10.625 11.8938 11.7031 10.9375 13.4375 10.9375C13.775 10.9375 14.0906 10.975 14.375 11.0469V7.34375L7.5 9.0625V15.625C7.5 17.1687 6.42188 18.125 4.6875 18.125C2.95312 18.125 1.875 17.1687 1.875 15.625C1.875 14.0813 2.95312 13.125 4.6875 13.125C5.025 13.125 5.34063 13.1625 5.625 13.2344V4.53125L16.25 1.875Z" />
    </>
  ),
};

export const musicIcon: LoadedIconFunction = createIcon(
  "music",
  iconDefinition,
);
