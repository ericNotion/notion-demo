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
      <path d="M15.7406 3.78125C15.4562 2.925 14.8625 2.5 13.9625 2.5H13.125C13.125 2.5 12.4062 1.25 10 1.25C7.59375 1.25 6.875 2.5 6.875 2.5H6.0375C5.13438 2.5 4.54375 2.92813 4.25938 3.78125L0.9375 13.75L3.75 14.6875L5.625 9.0625V17.5H14.375V9.0625L16.25 14.6875L19.0625 13.75L15.7406 3.78125ZM8.4375 6.875L6.5625 4.375L7.5 3.4375L9.375 5.9375L8.4375 6.875ZM11.5625 6.875L10.625 5.9375L12.5 3.4375L13.4375 4.375L11.5625 6.875Z" />
    </>
  ),
};

export const shirtIcon: LoadedIconFunction = createIcon(
  "shirt",
  iconDefinition,
);
