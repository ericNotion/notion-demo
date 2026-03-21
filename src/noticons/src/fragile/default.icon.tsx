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
      <path d="M15.625 8.75C15.625 11.2125 14.0594 12.8188 10.9375 13.0813V15.625H13.4375V17.5H6.5625V15.625H9.0625V13.0813C5.94063 12.8188 4.375 11.2125 4.375 8.75C4.375 8.42812 4.41563 8.10938 4.49375 7.79688L5.81875 2.5H9.3L8.12813 4.84375L10.6687 7.38437L9.64062 9.44062L10.7594 10L12.1906 7.1375L9.65 4.59687L10.7 2.5H14.1875L15.5125 7.79688C15.5906 8.10938 15.6313 8.42812 15.6313 8.75H15.625Z" />
    </>
  ),
};

export const fragileIcon: LoadedIconFunction = createIcon(
  "fragile",
  iconDefinition,
);
