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
      <path d="M17.5 13.125C17.5 14.1594 16.7437 15 15.625 15H15V15.625C15 16.7437 14.1594 17.5 13.125 17.5C11.55 17.5 10.625 15.75 10.625 13.125V11.875H9.375V13.125C9.375 15.75 8.45 17.5 6.875 17.5C5.84063 17.5 5 16.7437 5 15.625V15H4.375C3.25625 15 2.5 14.1594 2.5 13.125C2.5 11.55 4.25 10.625 6.875 10.625H8.125V9.375H6.875C4.25 9.375 2.5 8.45 2.5 6.875C2.5 5.84063 3.25625 5 4.375 5H5V4.375C5 3.25625 5.84063 2.5 6.875 2.5C8.45 2.5 9.375 4.25 9.375 6.875V8.125H10.625V6.875C10.625 4.25 11.55 2.5 13.125 2.5C14.1594 2.5 15 3.25625 15 4.375V5H15.625C16.7437 5 17.5 5.84063 17.5 6.875C17.5 8.45 15.75 9.375 13.125 9.375H11.875V10.625H13.125C15.75 10.625 17.5 11.55 17.5 13.125Z" />
    </>
  ),
};

export const cloverFourLeafIcon: LoadedIconFunction = createIcon(
  "cloverFourLeaf",
  iconDefinition,
);
