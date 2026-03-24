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
      <path d="M18.0438 15.9375L13.9813 20L12.6562 18.675L14.4562 16.875H10C5.85938 16.875 2.5 13.5156 2.5 9.375C2.5 5.23438 5.85938 1.875 10 1.875C14.1406 1.875 17.5 5.23438 17.5 9.375H15.625C15.625 6.26875 13.1062 3.75 10 3.75C6.89375 3.75 4.375 6.26875 4.375 9.375C4.375 12.4812 6.89375 15 10 15H14.4562L12.6562 13.2L13.9813 11.875L18.0438 15.9375ZM6.875 9.375C6.875 11.1 8.275 12.5 10 12.5C11.725 12.5 13.125 11.1 13.125 9.375C13.125 7.65 11.725 6.25 10 6.25C8.275 6.25 6.875 7.65 6.875 9.375Z" />
    </>
  ),
};

export const iterateIcon: LoadedIconFunction = createIcon(
  "iterate",
  iconDefinition,
);
