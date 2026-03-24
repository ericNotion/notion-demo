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
      <path d="M12.8125 2.5H7.1875C5.64375 2.5 4.6875 3.45625 4.6875 5V17.5H6.5625L10 14.0625L13.4375 17.5H15.3125V5C15.3125 3.45625 14.3562 2.5 12.8125 2.5ZM13.4375 14.8469L10 11.4094L6.5625 14.8469V5C6.5625 4.61562 6.80312 4.375 7.1875 4.375H12.8125C13.1969 4.375 13.4375 4.61562 13.4375 5V14.8469Z" />
    </>
  ),
};

export const bookmarkOutlineIcon: LoadedIconFunction = createIcon(
  "bookmarkOutline",
  iconDefinition,
);
