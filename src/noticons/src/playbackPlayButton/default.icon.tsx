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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM14.375 10.4688L7.8125 13.75H6.875V6.25H7.8125L14.375 9.53125V10.4688Z" />
    </>
  ),
};

export const playbackPlayButtonIcon: LoadedIconFunction = createIcon(
  "playbackPlayButton",
  iconDefinition,
);
