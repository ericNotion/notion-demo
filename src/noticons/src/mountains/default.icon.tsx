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
      <path d="M20 15V16.25H0V15L6.25 5.625H7.5L11.6656 11.875L14.1656 8.125H15.4156L20 15Z" />
    </>
  ),
};

export const mountainsIcon: LoadedIconFunction = createIcon(
  "mountains",
  iconDefinition,
);
