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
      <path d="M16.05 2.5H14.0625C9.45312 2.5 9.56563 6.68437 8.75 7.5C7.61562 8.63438 2.5 8.39062 2.5 13.75V15.4094L4.59062 17.5H6.25C11.6094 17.5 11.3656 12.3844 12.5 11.25C13.325 10.425 17.5 10.5469 17.5 5.9375V3.95L16.05 2.5ZM6.25 12.5L5 11.25L6.25 10L7.5 11.25L6.25 12.5ZM14.6875 8.4375L13.4375 7.1875L14.6875 5.9375L15.9375 7.1875L14.6875 8.4375Z" />
    </>
  ),
};

export const peanutIcon: LoadedIconFunction = createIcon(
  "peanut",
  iconDefinition,
);
