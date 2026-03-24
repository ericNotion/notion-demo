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
      <path d="M18.125 14.375H16.25V17.5H3.75V11.875C3.75 10.4938 4.86875 9.375 6.25 9.375H13.75C15.1313 9.375 16.25 10.4938 16.25 11.875V12.5H18.125V14.375ZM13.75 6.875C13.75 6.0625 13.125 5.625 13.125 5.625C13.125 5.625 13.75 5.1875 13.75 4.375C13.75 3.5625 12.9406 2.5 10 2.5C7.05938 2.5 6.25 3.5625 6.25 4.375C6.25 5.1875 6.875 5.625 6.875 5.625C6.875 5.625 6.25 6.0625 6.25 6.875V8.125H13.75V6.875Z" />
    </>
  ),
};

export const toasterIcon: LoadedIconFunction = createIcon(
  "toaster",
  iconDefinition,
);
