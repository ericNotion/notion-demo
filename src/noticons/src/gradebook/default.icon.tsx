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
      <path d="M15 5.625V15.625H7.025L5.775 14.375H13.75V2.5H3.125V13.3406C3.125 14.0812 3.33438 14.5844 3.85625 15.1094L5.51562 16.7688C6.04062 17.2937 6.54375 17.5 7.28437 17.5H16.875V5.625H15ZM8.75 6.71875H9.84375V5.625H10.7812V6.71875H11.875V7.65625H10.7812V8.75H9.84375V7.65625H8.75V6.71875ZM4.6875 8.75L5.9375 5H7.1875L8.4375 8.75H7.45L7.25312 8.125H5.875L5.67812 8.75H4.69063H4.6875ZM7.00625 7.34375H6.12188L6.56563 5.94063L7.00938 7.34375H7.00625Z" />
    </>
  ),
};

export const gradebookIcon: LoadedIconFunction = createIcon(
  "gradebook",
  iconDefinition,
);
