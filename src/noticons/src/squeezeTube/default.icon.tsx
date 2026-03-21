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
      <path d="M15 2.5V4.00313C15 5.20312 14.8656 6.025 14.4875 7.16563L12.5 13.125H7.5L5.5125 7.16563C5.13125 6.025 5 5.20312 5 4.00313V2.5H15ZM7.5 17.5H12.5V14.375H7.5V17.5Z" />
    </>
  ),
};

export const squeezeTubeIcon: LoadedIconFunction = createIcon(
  "squeezeTube",
  iconDefinition,
);
