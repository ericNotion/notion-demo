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
      <path d="M14.7375 12.0844L13.3281 10.675C13.6031 10.1344 13.75 9.4875 13.75 8.74687H15.625C15.625 10.0656 15.3125 11.1906 14.7375 12.0813V12.0844ZM12.5 8.75V4.375C12.5 2.83125 11.5437 1.875 10 1.875C8.45625 1.875 7.5 2.83125 7.5 4.375V4.84688L12.3531 9.7C12.4469 9.41563 12.5 9.09687 12.5 8.74687V8.75ZM10.9375 12.5H10C7.6875 12.5 6.25 11.0625 6.25 8.75H4.375C4.375 11.8938 6.14687 13.9531 9.0625 14.3125V15.625H6.25V17.5H13.75V15.625H10.9375V12.5ZM2.75937 1.875L1.875 2.75937L17.2406 18.125L18.125 17.2406L2.75937 1.875Z" />
    </>
  ),
};

export const microphoneOffIcon: LoadedIconFunction = createIcon(
  "microphoneOff",
  iconDefinition,
);
