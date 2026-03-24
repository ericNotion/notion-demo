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
      <path d="M2.5 12.5H17.5V13.75C17.5 14.5219 17.0219 15 16.25 15H11.875V16.25H13.75V17.5H6.25V16.25H8.125V15H3.75C2.97812 15 2.5 14.5219 2.5 13.75V12.5ZM16.25 3.125H3.75C2.97812 3.125 2.5 3.60312 2.5 4.375V11.25H17.5V4.375C17.5 3.60312 17.0219 3.125 16.25 3.125Z" />
    </>
  ),
};

export const computerIcon: LoadedIconFunction = createIcon(
  "computer",
  iconDefinition,
);
