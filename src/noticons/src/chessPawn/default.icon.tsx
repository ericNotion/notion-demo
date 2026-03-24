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
      <path d="M14.0625 15.625L12.1875 10H13.75V8.125H11.8687C12.6312 7.55625 13.125 6.65 13.125 5.625C13.125 3.9 11.725 2.5 10 2.5C8.275 2.5 6.875 3.9 6.875 5.625C6.875 6.65 7.36875 7.55625 8.13125 8.125H6.25V10H7.8125L5.9375 15.625H3.75V17.5H16.25V15.625H14.0625Z" />
    </>
  ),
};

export const chessPawnIcon: LoadedIconFunction = createIcon(
  "chessPawn",
  iconDefinition,
);
