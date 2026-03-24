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
      <path d="M17.5 2.5V5.14063C17.5 6.875 17.2188 8.0625 16.4437 9.6125L12.5 17.5H10.625V7.45312C11.7469 7.29063 12.5 6.74687 12.5 6.74687L11.9406 5.625C11.9406 5.625 11.0844 6.24687 10 6.24687C8.91563 6.24687 8.05938 5.625 8.05938 5.625L7.5 6.74687C7.5 6.74687 8.25313 7.29063 9.375 7.45312V17.5H6.25V12.1719C4.06563 11.4 2.5 9.32188 2.5 6.875C2.5 5.10625 3.31875 3.53125 4.59375 2.5H8.125C8.125 3.65625 8.84375 4.375 10 4.375C11.1562 4.375 11.875 3.65625 11.875 2.5H17.5Z" />
    </>
  ),
};

export const meatIcon: LoadedIconFunction = createIcon("meat", iconDefinition);
