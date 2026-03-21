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
      <path d="M16.875 5.625V14.375H15.7812L10.3125 10.8687V14.375H9.21875L3.125 10.4688V9.53125L9.21875 5.625H10.3125V9.13125L15.7812 5.625H16.875Z" />
    </>
  ),
};

export const playbackRewindIcon: LoadedIconFunction = createIcon(
  "playbackRewind",
  iconDefinition,
);
