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
      <path d="M13.75 8.125V4.375C13.75 2.0625 12.3125 0.625 10 0.625C7.6875 0.625 6.25 2.0625 6.25 4.375V6.25H8.125V4.375C8.125 3.09687 8.72188 2.5 10 2.5C11.2781 2.5 11.875 3.09687 11.875 4.375V8.125H3.75V17.5H16.25V8.125H13.75ZM11.5625 15V15.625H8.4375V15L9.22188 12.9094C8.75625 12.6406 8.4375 12.1406 8.4375 11.5625C8.4375 10.7 9.1375 10 10 10C10.8625 10 11.5625 10.7 11.5625 11.5625C11.5625 12.1406 11.2438 12.6406 10.7781 12.9094L11.5625 15Z" />
    </>
  ),
};

export const unlockKeyholeIcon: LoadedIconFunction = createIcon(
  "unlockKeyhole",
  iconDefinition,
);
