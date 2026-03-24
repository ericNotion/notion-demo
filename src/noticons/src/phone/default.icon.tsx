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
      <path d="M12.5 2.5H7.5C5.95625 2.5 5 3.45625 5 5V15C5 16.5437 5.95625 17.5 7.5 17.5H12.5C14.0437 17.5 15 16.5437 15 15V5C15 3.45625 14.0437 2.5 12.5 2.5ZM11.875 15.625H8.125C7.74062 15.625 7.5 15.3844 7.5 15C7.5 14.6156 7.74062 14.375 8.125 14.375H11.875C12.2594 14.375 12.5 14.6156 12.5 15C12.5 15.3844 12.2594 15.625 11.875 15.625Z" />
    </>
  ),
};

export const phoneIcon: LoadedIconFunction = createIcon(
  "phone",
  iconDefinition,
);
