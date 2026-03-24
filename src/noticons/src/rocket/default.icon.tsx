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
      <path d="M15 11.25V15H13.75L11.875 13.125V15H8.125V13.125L6.25 15H5V11.25L8.125 8.125V4.375C8.125 2.25625 8.84375 1.25 10 1.25C11.1562 1.25 11.875 2.25625 11.875 4.375V8.125L15 11.25ZM10 15.9375C9.30937 15.9375 8.75 16.4969 8.75 17.1875C8.75 17.8781 9.08125 18.2437 10 19.375C10.9187 18.2437 11.25 17.8781 11.25 17.1875C11.25 16.4969 10.6906 15.9375 10 15.9375Z" />
    </>
  ),
};

export const rocketIcon: LoadedIconFunction = createIcon(
  "rocket",
  iconDefinition,
);
