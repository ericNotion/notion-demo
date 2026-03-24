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
      <path d="M3.125 6.25C3.125 4.70625 4.08125 3.75 5.625 3.75C7.16875 3.75 8.125 4.70625 8.125 6.25C8.125 7.79375 7.16875 8.75 5.625 8.75C4.08125 8.75 3.125 7.79375 3.125 6.25ZM5.625 10C2.54063 10 0.625 11.9156 0.625 15H10.625C10.625 11.9156 8.70938 10 5.625 10ZM18.75 7.575L17.425 6.25L15 8.675L12.575 6.25L11.25 7.575L13.675 10L11.25 12.425L12.575 13.75L15 11.325L17.425 13.75L18.75 12.425L16.325 10L18.75 7.575Z" />
    </>
  ),
};

export const unfollowIcon: LoadedIconFunction = createIcon(
  "unfollow",
  iconDefinition,
);
