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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM14.1406 13.8C13.2937 12.5719 11.8625 11.875 10 11.875C8.1375 11.875 6.70625 12.5719 5.85938 13.8C4.94062 12.8 4.375 11.4688 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375C13.1062 4.375 15.625 6.89375 15.625 10C15.625 11.4656 15.0594 12.7969 14.1406 13.8ZM12.5 8.125C12.5 9.66875 11.5437 10.625 10 10.625C8.45625 10.625 7.5 9.66875 7.5 8.125C7.5 6.58125 8.45625 5.625 10 5.625C11.5437 5.625 12.5 6.58125 12.5 8.125Z" />
    </>
  ),
};

export const userCircleIcon: LoadedIconFunction = createIcon(
  "userCircle",
  iconDefinition,
);
