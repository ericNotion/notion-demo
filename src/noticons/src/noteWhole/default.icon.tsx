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
      <path d="M10 5C6.52813 5 4.375 6.91563 4.375 10C4.375 13.0844 6.52813 15 10 15C13.4719 15 15.625 13.0844 15.625 10C15.625 6.91563 13.4719 5 10 5ZM10.625 12.5C8.8625 12.5 7.5 11.1375 7.5 9.375C7.5 8.10625 8.10625 7.5 9.375 7.5C11.1375 7.5 12.5 8.8625 12.5 10.625C12.5 11.8938 11.8938 12.5 10.625 12.5Z" />
    </>
  ),
};

export const noteWholeIcon: LoadedIconFunction = createIcon(
  "noteWhole",
  iconDefinition,
);
