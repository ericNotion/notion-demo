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
      <path d="M16.875 9.53125V10.4688L10.7812 14.375H9.6875V10.8687L4.21875 14.375H3.125V5.625H4.21875L9.6875 9.13125V5.625H10.7812L16.875 9.53125Z" />
    </>
  ),
};

export const playbackFastForwardIcon: LoadedIconFunction = createIcon(
  "playbackFastForward",
  iconDefinition,
);
