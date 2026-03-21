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
      <path d="M20 6.875V13.75H17.5C17.5 12.5938 16.7812 11.875 15.625 11.875H3.75L0 10.9375V9.6875L3.75 8.75H5V6.875H7.5V8.75H8.75V6.875H11.25V8.75H15.625C16.7812 8.75 17.5 8.03125 17.5 6.875H20Z" />
    </>
  ),
};

export const clarinetIcon: LoadedIconFunction = createIcon(
  "clarinet",
  iconDefinition,
);
