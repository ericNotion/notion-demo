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
      <path d="M17.5 5V7.5H2.5V3.125H6.4875C7.43438 3.125 8.08125 3.39062 8.75 4.0625C9.42188 4.73438 10.0656 5 11.0125 5H17.5ZM2.5 14.375C2.5 15.9187 3.45625 16.875 5 16.875H15C16.5437 16.875 17.5 15.9187 17.5 14.375V8.75H2.5V14.375Z" />
    </>
  ),
};

export const folderIcon: LoadedIconFunction = createIcon(
  "folder",
  iconDefinition,
);
