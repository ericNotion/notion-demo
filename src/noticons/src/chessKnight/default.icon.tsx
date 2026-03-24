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
      <path d="M14.375 15.625H16.25V17.5H3.75V15.625H5.9375L3.74687 11.2437C3.46875 10.6875 3.26562 10.0938 3.18125 9.475C2.8375 6.98125 4.15312 4.75 6.18125 3.725C5.8875 3.05938 5.71875 2.30625 5.71875 1.48125L6.575 0.625L9.08125 3.13125C10.5094 3.16563 11.8719 3.74062 12.8812 4.75313L16.2531 8.125L13.7531 10.625L10.6281 8.54063V10.4156L12.7094 11.8031C13.7531 12.5 14.3781 13.6687 14.3781 14.9219V15.6219L14.375 15.625Z" />
    </>
  ),
};

export const chessKnightIcon: LoadedIconFunction = createIcon(
  "chessKnight",
  iconDefinition,
);
