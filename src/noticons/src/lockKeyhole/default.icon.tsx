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
      <path d="M13.75 8.125V6.25C13.75 3.9375 12.3125 2.5 10 2.5C7.6875 2.5 6.25 3.9375 6.25 6.25V8.125H3.75V17.5H16.25V8.125H13.75ZM8.125 6.25C8.125 4.97187 8.72188 4.375 10 4.375C11.2781 4.375 11.875 4.97187 11.875 6.25V8.125H8.125V6.25ZM11.5625 15V15.625H8.4375V15L9.22188 12.9094C8.75625 12.6406 8.4375 12.1406 8.4375 11.5625C8.4375 10.7 9.1375 10 10 10C10.8625 10 11.5625 10.7 11.5625 11.5625C11.5625 12.1406 11.2438 12.6406 10.7781 12.9094L11.5625 15Z" />
    </>
  ),
};

export const lockKeyholeIcon: LoadedIconFunction = createIcon(
  "lockKeyhole",
  iconDefinition,
);
