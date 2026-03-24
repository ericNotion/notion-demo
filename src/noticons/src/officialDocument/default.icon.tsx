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
      <path d="M8.75 14.3313L8.2125 15.625L8.75 16.9187L7.45625 17.4563L6.91875 18.75L5.625 18.2125L4.33125 18.75L3.79375 17.4563L2.5 16.9187L3.0375 15.625L2.5 14.3313L3.79375 13.7937L4.33125 12.5L5.625 13.0375L6.91875 12.5L7.45625 13.7937L8.75 14.3313ZM11.875 2.5H10.625V8.125H16.25V6.875L11.875 2.5ZM9.375 2.5H3.75V10.9062L5.625 11.6813L7.59687 10.8656L8.4125 12.8375L10.3844 13.6531L9.56875 15.625L10.3469 17.5H16.2531V9.375H9.37813V2.5H9.375Z" />
    </>
  ),
};

export const officialDocumentIcon: LoadedIconFunction = createIcon(
  "officialDocument",
  iconDefinition,
);
