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
      <path d="M16.2875 5L15.35 8.75H13.75V4.6875L11.5625 2.5H8.4375L6.25 4.6875V8.75H4.65L3.7125 5L2.5 5.30312L5.55 17.5H14.4531L17.5031 5.30312L16.2906 5H16.2875ZM12.8781 15.625L11.9 15.1375C11.3094 14.8438 10.6594 14.6875 10 14.6875C9.34062 14.6875 8.69063 14.8406 8.1 15.1375L7.12188 15.625L6.5625 14.5062L7.71875 13.9281C8.26562 13.6531 8.55 13.3 8.7 12.7063L9.37813 10H10.6281L11.3062 12.7063C11.4531 13.3 11.7406 13.6562 12.2875 13.9281L13.4438 14.5062L12.8844 15.625H12.8781Z" />
    </>
  ),
};

export const takeoutBoxIcon: LoadedIconFunction = createIcon(
  "takeoutBox",
  iconDefinition,
);
