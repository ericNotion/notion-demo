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
      <path d="M3.75 6.25C3.75 4.70625 4.70625 3.75 6.25 3.75C7.79375 3.75 8.75 4.70625 8.75 6.25C8.75 7.79375 7.79375 8.75 6.25 8.75C4.70625 8.75 3.75 7.79375 3.75 6.25ZM13.75 8.75C15.2937 8.75 16.25 7.79375 16.25 6.25C16.25 4.70625 15.2937 3.75 13.75 3.75C12.2063 3.75 11.25 4.70625 11.25 6.25C11.25 7.79375 12.2063 8.75 13.75 8.75ZM6.25 10C3.16563 10 1.25 11.9156 1.25 15H11.25C11.25 11.9156 9.33438 10 6.25 10ZM13.75 10C12.6781 10 11.75 10.2375 10.9937 10.6687C11.9563 11.7437 12.5 13.2219 12.5 15H18.75C18.75 11.9156 16.8344 10 13.75 10Z" />
    </>
  ),
};

export const friendsIcon: LoadedIconFunction = createIcon(
  "friends",
  iconDefinition,
);
