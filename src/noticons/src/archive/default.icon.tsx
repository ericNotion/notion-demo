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
      <path d="M3.75 16.875H16.25V6.875H3.75V16.875ZM8.4375 8.75H11.5625C12.1406 8.75 12.5 9.10938 12.5 9.6875C12.5 10.2656 12.1406 10.625 11.5625 10.625H8.4375C7.85938 10.625 7.5 10.2656 7.5 9.6875C7.5 9.10938 7.85938 8.75 8.4375 8.75ZM17.5 3.125V5.625H2.5V3.125H17.5Z" />
    </>
  ),
};

export const archiveIcon: LoadedIconFunction = createIcon(
  "archive",
  iconDefinition,
);
