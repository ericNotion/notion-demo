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
      <path d="M17.5 6.95312C17.5 10.775 12.8125 15.3125 10.625 17.5H9.375C7.1875 15.3125 2.5 10.775 2.5 6.95312C2.5 4.19688 4.2125 2.5 6.32812 2.5C8.06875 2.5 9.53438 3.6625 10 5.25C10.4656 3.65937 11.9312 2.5 13.6719 2.5C15.7875 2.5 17.5 4.19688 17.5 6.95312Z" />
    </>
  ),
};

export const suitHeartIcon: LoadedIconFunction = createIcon(
  "suitHeart",
  iconDefinition,
);
