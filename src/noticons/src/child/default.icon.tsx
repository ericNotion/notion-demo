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
      <path d="M8.125 4.375C8.125 3.21875 8.84375 2.5 10 2.5C11.1562 2.5 11.875 3.21875 11.875 4.375C11.875 5.53125 11.1562 6.25 10 6.25C8.84375 6.25 8.125 5.53125 8.125 4.375ZM11.875 8.79062C11.9406 8.75 12.0094 8.70937 12.0781 8.6625L15 6.71562L14.1344 5.41563L11.8469 6.94062C11.2344 7.34687 10.7344 7.5 10 7.5C9.26562 7.5 8.7625 7.34687 8.15313 6.94062L5.86563 5.41563L5 6.71562L7.92188 8.6625C7.99063 8.70937 8.05938 8.75 8.125 8.79062V11.7031L6.25 16.9156L8.02813 17.4656L9.71562 12.7781H10.2875L11.975 17.4656L13.7531 16.9156L11.8781 11.7031V8.79062H11.875Z" />
    </>
  ),
};

export const childIcon: LoadedIconFunction = createIcon(
  "child",
  iconDefinition,
);
