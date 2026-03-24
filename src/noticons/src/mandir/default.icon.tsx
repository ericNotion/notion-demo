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
      <path d="M17.5 9.375V16.875H11.25V13.75C11.25 12.9781 10.7719 12.5 10 12.5C9.22813 12.5 8.75 12.9781 8.75 13.75V16.875H2.5V9.375H4.375L5.625 4.375H6.875L7.1875 5.625H8.125L9.375 0.625H10.625L11.875 5.625H12.8125L13.125 4.375H14.375L15.625 9.375H17.5Z" />
    </>
  ),
};

export const mandirIcon: LoadedIconFunction = createIcon(
  "mandir",
  iconDefinition,
);
