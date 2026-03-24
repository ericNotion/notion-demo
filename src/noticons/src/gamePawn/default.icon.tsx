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
      <path d="M16.25 15.625V17.5H3.75V15.625C5.20938 15.625 6.16875 14.9344 6.62812 13.55L8.38125 8.29375C7.47812 7.74688 6.875 6.75625 6.875 5.625C6.875 3.9 8.275 2.5 10 2.5C11.725 2.5 13.125 3.9 13.125 5.625C13.125 6.75625 12.5219 7.74688 11.6188 8.29375L13.3719 13.55C13.8344 14.9344 14.7906 15.625 16.25 15.625Z" />
    </>
  ),
};

export const gamePawnIcon: LoadedIconFunction = createIcon(
  "gamePawn",
  iconDefinition,
);
