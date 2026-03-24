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
      <path d="M10 2.5C5.37187 2.5 2.5 5.6125 2.5 10.625C2.5 12.3594 3.3375 13.4375 4.6875 13.4375C5.54063 13.4375 6.1875 13.0063 6.55 12.25L7.65 13.35C8.43437 14.1344 8.74687 14.8906 8.74687 16.0031V17.5H11.2469V16.0031C11.2469 14.8906 11.5594 14.1375 12.3438 13.35L13.4438 12.25C13.8063 13.0063 14.4531 13.4375 15.3062 13.4375C16.6562 13.4375 17.4937 12.3594 17.4937 10.625C17.4937 5.6125 14.6219 2.5 9.99375 2.5H10ZM10 13.05L8.2 11.25H11.8L10 13.05Z" />
    </>
  ),
};

export const treeIcon: LoadedIconFunction = createIcon("tree", iconDefinition);
