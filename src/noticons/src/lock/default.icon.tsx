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
      <path d="M13.75 8.125V6.25C13.75 3.9375 12.3125 2.5 10 2.5C7.6875 2.5 6.25 3.9375 6.25 6.25V8.125H3.75V17.5H16.25V8.125H13.75ZM8.125 6.25C8.125 4.97187 8.72188 4.375 10 4.375C11.2781 4.375 11.875 4.97187 11.875 6.25V8.125H8.125V6.25Z" />
    </>
  ),
};

export const lockIcon: LoadedIconFunction = createIcon("lock", iconDefinition);
