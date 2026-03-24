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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 15.625C6.89375 15.625 4.375 13.1062 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375C13.1062 4.375 15.625 6.89375 15.625 10C15.625 13.1062 13.1062 15.625 10 15.625Z" />
    </>
  ),
};

export const circleIcon: LoadedIconFunction = createIcon(
  "circle",
  iconDefinition,
);
