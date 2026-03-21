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
      <path d="M7.5 5.625H3.125V2.5H7.5V5.625ZM12.5 10.625C12.5 12.1687 11.5437 13.125 10 13.125C8.45625 13.125 7.5 12.1687 7.5 10.625V6.875H3.125V10.625C3.125 14.8656 5.75938 17.5 10 17.5C14.2406 17.5 16.875 14.8656 16.875 10.625V6.875H12.5V10.625ZM12.5 2.5V5.625H16.875V2.5H12.5Z" />
    </>
  ),
};

export const magnetIcon: LoadedIconFunction = createIcon(
  "magnet",
  iconDefinition,
);
