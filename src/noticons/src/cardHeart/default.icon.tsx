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
      <path d="M13.125 2.5H6.875C5.33125 2.5 4.375 3.45625 4.375 5V15C4.375 16.5437 5.33125 17.5 6.875 17.5H13.125C14.6687 17.5 15.625 16.5437 15.625 15V5C15.625 3.45625 14.6687 2.5 13.125 2.5ZM10.3125 13.75H9.6875C8.59375 12.6562 6.25 10.3875 6.25 8.475C6.25 7.09688 7.10625 6.25 8.1625 6.25C9.03125 6.25 9.76562 6.83125 10 7.625C10.2312 6.83125 10.9656 6.25 11.8375 6.25C12.8938 6.25 13.75 7.1 13.75 8.475C13.75 10.3875 11.4062 12.6562 10.3125 13.75Z" />
    </>
  ),
};

export const cardHeartIcon: LoadedIconFunction = createIcon(
  "cardHeart",
  iconDefinition,
);
