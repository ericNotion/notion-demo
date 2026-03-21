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
      <path d="M8.4375 3.75C8.4375 2.78438 9.03438 2.1875 10 2.1875C10.9656 2.1875 11.5625 2.78438 11.5625 3.75C11.5625 4.71563 10.9656 5.3125 10 5.3125C9.03438 5.3125 8.4375 4.71563 8.4375 3.75ZM14.7594 10.5438L15.625 9.24375L12.0781 6.87813C11.3906 6.41875 10.825 6.25 10 6.25C9.175 6.25 8.60938 6.42188 7.92188 6.87813L4.375 9.24375L5.24063 10.5438L8.4375 8.4125V10.9375L6.25 17.5H8.225L10 12.1781L11.775 17.5H13.75L11.5625 10.9375V8.4125L14.7594 10.5438Z" />
    </>
  ),
};

export const personMasculineIcon: LoadedIconFunction = createIcon(
  "personMasculine",
  iconDefinition,
);
