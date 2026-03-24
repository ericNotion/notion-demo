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
      <path d="M16.25 8.75C16.25 6.4375 14.8125 5 12.5 5H5C2.6875 5 1.25 6.4375 1.25 8.75C1.25 11.8344 3.16563 13.75 6.25 13.75H11.25C14.3344 13.75 16.25 11.8344 16.25 8.75ZM8.125 10L6.25 11.875C4.32188 11.875 3.125 10.6781 3.125 8.75C3.125 7.59375 3.84375 6.875 5 6.875H12.5C13.6562 6.875 14.375 7.59375 14.375 8.75C14.375 10.6781 13.1781 11.875 11.25 11.875L9.375 10H8.125ZM19.375 2.5V8.75C19.375 13.6844 16.1844 16.875 11.25 16.875H8.75V15H11.25C15.1625 15 17.5 12.6625 17.5 8.75V2.5H19.375Z" />
    </>
  ),
};

export const snorkelIcon: LoadedIconFunction = createIcon(
  "snorkel",
  iconDefinition,
);
