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
      <path d="M10.9375 10C10.9375 10.5188 10.5188 10.9375 10 10.9375C9.48125 10.9375 9.0625 10.5188 9.0625 10C9.0625 9.48125 9.48125 9.0625 10 9.0625C10.5188 9.0625 10.9375 9.48125 10.9375 10ZM17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10ZM14.375 6.06562L13.9344 5.625L8.4375 8.4375L5.625 13.9344L6.06562 14.375L11.5625 11.5625L14.375 6.06562Z" />
    </>
  ),
};

export const compassIcon: LoadedIconFunction = createIcon(
  "compass",
  iconDefinition,
);
