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
      <path d="M10.9375 9.84375V17.5H9.0625V9.84375C8.075 9.48125 7.5 8.49062 7.5 6.875C7.5 4.43438 8.44063 2.5 10 2.5C11.5594 2.5 12.5 4.43438 12.5 6.875C12.5 8.4875 11.925 9.48125 10.9375 9.84375Z" />
    </>
  ),
};

export const spoonIcon: LoadedIconFunction = createIcon(
  "spoon",
  iconDefinition,
);
