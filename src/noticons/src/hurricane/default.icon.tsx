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
      <path d="M14.7 4.80625H16.875V2.5H10C6.20312 2.5 3.125 5.34062 3.125 8.84687C3.125 10.8219 4.20313 12.5625 5.84375 13.6C6.1 13.7625 6.25 14.0312 6.25 14.3156C6.25 14.8 5.825 15.1906 5.3 15.1906H3.125V17.4969H10C13.7969 17.4969 16.875 14.6562 16.875 11.15C16.875 9.175 15.7969 7.43437 14.1562 6.39687C13.9 6.23437 13.75 5.96563 13.75 5.68125C13.75 5.19688 14.175 4.80625 14.7 4.80625ZM10 12.5C8.61875 12.5 7.5 11.3813 7.5 10C7.5 8.61875 8.61875 7.5 10 7.5C11.3813 7.5 12.5 8.61875 12.5 10C12.5 11.3813 11.3813 12.5 10 12.5Z" />
    </>
  ),
};

export const hurricaneIcon: LoadedIconFunction = createIcon(
  "hurricane",
  iconDefinition,
);
