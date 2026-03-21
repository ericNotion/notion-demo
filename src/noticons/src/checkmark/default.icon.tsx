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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM9.0625 13.825L5.625 10.3875L6.95 9.0625L9.0625 11.175L13.3625 6.875L14.6875 8.2L9.0625 13.825Z" />
    </>
  ),
};

export const checkmarkIcon: LoadedIconFunction = createIcon(
  "checkmark",
  iconDefinition,
);
