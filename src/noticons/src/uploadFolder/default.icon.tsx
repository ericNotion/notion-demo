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
      <path d="M2.5 8.75H17.5V14.375C17.5 15.9187 16.5437 16.875 15 16.875H10.625V12.7594L12.2406 14.375L13.125 13.4906L10 10.3656L6.875 13.4906L7.75938 14.375L9.375 12.7594V16.875H5C3.45625 16.875 2.5 15.9187 2.5 14.375V8.75ZM11.0125 5C10.0625 5 9.41875 4.73438 8.75 4.0625C8.07812 3.39062 7.43438 3.125 6.4875 3.125H2.5V7.5H17.5V5H11.0125Z" />
    </>
  ),
};

export const uploadFolderIcon: LoadedIconFunction = createIcon(
  "uploadFolder",
  iconDefinition,
);
