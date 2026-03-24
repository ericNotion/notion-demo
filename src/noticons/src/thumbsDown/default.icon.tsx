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
      <path d="M16.5469 10.125C16.7563 10.3656 16.875 10.6906 16.875 11.0938C16.875 11.9625 16.3375 12.5 15.4688 12.5H10V16.25C10 17.4062 9.28125 18.125 8.125 18.125H7.5V15L5.3125 10.625H3.125V4.375H5L6.44375 3.65312C7.21875 3.26562 7.8125 3.125 8.68125 3.125H13.75C14.6187 3.125 15.1562 3.6625 15.1562 4.53125C15.1562 4.8375 15.0875 5.09687 14.9625 5.3125H15.1562C16.025 5.3125 16.5625 5.85 16.5625 6.71875C16.5625 7.06562 16.4719 7.35625 16.3156 7.58438C16.8625 7.76562 17.1875 8.23438 17.1875 8.90625C17.1875 9.475 16.9531 9.9 16.5469 10.125Z" />
    </>
  ),
};

export const thumbsDownIcon: LoadedIconFunction = createIcon(
  "thumbsDown",
  iconDefinition,
);
