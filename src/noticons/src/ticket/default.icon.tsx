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
      <path d="M13.75 12.5H6.25V7.5H13.75V12.5ZM16.25 10C16.25 11.1562 16.9688 11.875 18.125 11.875V15.625H1.875V11.875C3.03125 11.875 3.75 11.1562 3.75 10C3.75 8.84375 3.03125 8.125 1.875 8.125V4.375H18.125V8.125C16.9688 8.125 16.25 8.84375 16.25 10ZM15 6.25H5V13.75H15V6.25Z" />
    </>
  ),
};

export const ticketIcon: LoadedIconFunction = createIcon(
  "ticket",
  iconDefinition,
);
