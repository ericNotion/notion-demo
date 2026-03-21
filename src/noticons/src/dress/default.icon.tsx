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
      <path d="M15 17.5C15 17.5 13.85 18.75 10 18.75C6.15 18.75 5 17.5 5 17.5L7.25312 8.48125L6.39687 5.9125C6.2875 5.58437 6.25 5.34688 6.25 5C6.25 4.65313 6.2875 4.41562 6.39687 4.0875L7.34375 1.25H8.4375V3.75C8.4375 4.13438 8.67812 4.375 9.0625 4.375H10.9375C11.3219 4.375 11.5625 4.13438 11.5625 3.75V1.25H12.6562L13.6031 4.0875C13.7125 4.41562 13.75 4.65313 13.75 5C13.75 5.34688 13.7125 5.58437 13.6031 5.9125L12.7469 8.48125C13.1469 10.0781 15 17.5 15 17.5Z" />
    </>
  ),
};

export const dressIcon: LoadedIconFunction = createIcon(
  "dress",
  iconDefinition,
);
