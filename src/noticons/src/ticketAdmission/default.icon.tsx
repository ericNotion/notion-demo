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
      <path d="M13.75 12.5H6.25V7.5H13.75V12.5ZM18.125 6.25V13.75C16.5813 13.75 15.625 14.7063 15.625 16.25H4.375C4.375 14.7063 3.41875 13.75 1.875 13.75V6.25C3.41875 6.25 4.375 5.29375 4.375 3.75H15.625C15.625 5.29375 16.5813 6.25 18.125 6.25ZM15 6.25H5V13.75H15V6.25Z" />
    </>
  ),
};

export const ticketAdmissionIcon: LoadedIconFunction = createIcon(
  "ticketAdmission",
  iconDefinition,
);
