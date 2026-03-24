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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM9.0625 15.5406C7.93437 15.35 6.92188 14.8281 6.12813 14.075L9.0625 11.875V15.5406ZM9.0625 9.53125L5.00313 12.575C4.60313 11.8031 4.375 10.9281 4.375 10C4.375 7.2125 6.40312 4.90625 9.0625 4.45938V9.53125ZM10.9375 15.5406V11.875L13.8719 14.075C13.0781 14.8281 12.0656 15.35 10.9375 15.5406ZM14.9969 12.575L10.9375 9.53125V4.45938C13.5969 4.90625 15.625 7.2125 15.625 10C15.625 10.9281 15.3969 11.8031 14.9969 12.575Z" />
    </>
  ),
};

export const peaceIcon: LoadedIconFunction = createIcon(
  "peace",
  iconDefinition,
);
