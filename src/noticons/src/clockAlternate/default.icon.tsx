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
      <path d="M10.9375 9.375H13.75V11.25H9.0625V5.625H10.9375V9.375ZM17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10ZM15.625 10C15.625 6.89375 13.1062 4.375 10 4.375C6.89375 4.375 4.375 6.89375 4.375 10C4.375 13.1062 6.89375 15.625 10 15.625C13.1062 15.625 15.625 13.1062 15.625 10Z" />
    </>
  ),
};

export const clockAlternateIcon: LoadedIconFunction = createIcon(
  "clockAlternate",
  iconDefinition,
);
