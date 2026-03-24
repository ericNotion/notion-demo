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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM13.9781 13.9781L6.02188 6.02188C7.11875 4.925 8.55937 4.375 10 4.375C13.1062 4.375 15.625 6.89375 15.625 10C15.625 11.4406 15.075 12.8781 13.9781 13.9781Z" />
    </>
  ),
};

export const contrastIcon: LoadedIconFunction = createIcon(
  "contrast",
  iconDefinition,
);
