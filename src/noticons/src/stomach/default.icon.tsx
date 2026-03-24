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
      <path d="M17.5 10C17.5 14.6281 14.8656 17.5 10.625 17.5C8.58437 17.5 6.91563 16.8313 5.73438 15.625H5.625C4.85313 15.625 4.375 16.1031 4.375 16.875V17.5H1.875V16.875C1.875 11.4438 7.5 14.5094 7.5 10C7.5 9.1875 7.59062 8.44687 7.75312 7.775L7.075 7.43438C5.65625 6.725 5.00313 5.66875 5.00313 4.08125V2.5H7.50313V4.08125C7.50313 4.60938 7.72187 4.9625 8.19375 5.2L8.79688 5.5C9.6625 4.37813 10.9312 3.75 12.5031 3.75C15.5875 3.75 17.5031 6.14375 17.5031 10H17.5Z" />
    </>
  ),
};

export const stomachIcon: LoadedIconFunction = createIcon(
  "stomach",
  iconDefinition,
);
