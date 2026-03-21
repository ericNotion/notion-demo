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
      <path d="M18.125 6.25V14.6875C18.125 16.4219 17.0469 17.5 15.3125 17.5C13.5781 17.5 12.5 16.4219 12.5 14.6875V12.5H11.9344L11.5281 13.7188C11.3438 14.2688 10.8906 14.4937 10.3438 14.3125C9.79375 14.1281 9.56875 13.675 9.75 13.1281L11.25 8.62813V6.25313H18.125V6.25ZM6.25 6.25V3.4375C6.25 2.85938 6.60938 2.5 7.1875 2.5C7.76562 2.5 8.125 2.85938 8.125 3.4375V4.375H10V3.4375C10 1.70312 8.92188 0.625 7.1875 0.625C5.45312 0.625 4.375 1.70312 4.375 3.4375V6.25H0.625L4.58437 18.125H6.04375L10.0031 6.25H6.25313H6.25Z" />
    </>
  ),
};

export const lostAndFoundIcon: LoadedIconFunction = createIcon(
  "lostAndFound",
  iconDefinition,
);
