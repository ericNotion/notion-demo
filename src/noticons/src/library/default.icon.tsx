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
      <path d="M17.5 7.5V5.625L10 1.875L2.5 5.625V7.5H4.375V14.375H2.5V16.875H17.5V14.375H15.625V7.5H17.5ZM10 3.75C10.6906 3.75 11.25 4.30938 11.25 5C11.25 5.69062 10.6906 6.25 10 6.25C9.30937 6.25 8.75 5.69062 8.75 5C8.75 4.30938 9.30937 3.75 10 3.75ZM6.875 7.5H8.75V14.375H6.875V7.5ZM13.125 14.375H11.25V7.5H13.125V14.375Z" />
    </>
  ),
};

export const libraryIcon: LoadedIconFunction = createIcon(
  "library",
  iconDefinition,
);
