import React from "react";

import {
  createIcon,
  type IconDefinition,
  type LoadedIconFunction,
} from "../../iconUtils";

export const iconDefinition: IconDefinition = {
  viewBox: "0 0 24 24",
  svg: (
    <>
      <path
        d="M16.25 12C16.25 14.3472 14.3472 16.25 12 16.25C9.65279 16.25 7.75 14.3472 7.75 12C7.75 9.65279 9.65279 7.75 12 7.75C14.3472 7.75 16.25 9.65279 16.25 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75 12H7.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 12H19.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

export const commitIcon: LoadedIconFunction = createIcon(
  "commit",
  iconDefinition,
);
