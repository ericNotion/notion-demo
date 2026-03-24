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
      <path d="M17.5 5V7.5H2.5V3.125H6.4875C7.4375 3.125 8.08125 3.39062 8.75 4.0625C9.42188 4.73438 10.0656 5 11.0125 5H17.5ZM2.5 8.75H17.5V14.375C17.5 15.9187 16.5437 16.875 15 16.875H5C3.45625 16.875 2.5 15.9187 2.5 14.375V8.75ZM7.1875 13.4375H9.375V15.625H10.625V13.4375H12.8125V12.1875H10.625V10H9.375V12.1875H7.1875V13.4375Z" />
    </>
  ),
};

export const newFolderIcon: LoadedIconFunction = createIcon(
  "newFolder",
  iconDefinition,
);
