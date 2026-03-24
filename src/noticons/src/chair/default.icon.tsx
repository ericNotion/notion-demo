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
      <path d="M18.125 7.5C18.125 8.27187 17.6469 8.75 16.875 8.75V14.375H15V16.25H13.125V14.375H6.875V16.25H5V14.375H3.125V8.75C2.35312 8.75 1.875 8.27187 1.875 7.5C1.875 6.72813 2.35312 6.25 3.125 6.25H5V10.625H15V6.25H16.875C17.6469 6.25 18.125 6.72813 18.125 7.5ZM13.75 4.32187C13.75 3.84375 13.575 3.52187 13.1687 3.26562C12.6125 2.91562 11.7344 2.5 10 2.5C8.26562 2.5 7.38438 2.9125 6.83125 3.26562C6.425 3.52187 6.25 3.84375 6.25 4.32187V9.375H13.75V4.32187Z" />
    </>
  ),
};

export const chairIcon: LoadedIconFunction = createIcon(
  "chair",
  iconDefinition,
);
