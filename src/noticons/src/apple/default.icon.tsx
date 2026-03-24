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
      <path d="M16.875 9.375C16.875 13.125 14.3469 16.875 12.5 16.875C11.3656 16.875 11.125 16.25 10 16.25C8.875 16.25 8.63438 16.875 7.5 16.875C5.65313 16.875 3.125 13.125 3.125 9.375C3.125 5.625 5.02813 4.375 6.875 4.375C7.8875 4.375 8.65937 4.96563 9.26562 5.3375C9.50625 2.88437 10.625 1.25 10.625 1.25L12.5 2.1875C12.5 2.1875 11.4031 3.34688 10.8469 5.26562C11.4375 4.89688 12.175 4.375 13.125 4.375C14.9719 4.375 16.875 5.625 16.875 9.375Z" />
    </>
  ),
};

export const appleIcon: LoadedIconFunction = createIcon(
  "apple",
  iconDefinition,
);
