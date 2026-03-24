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
      <path d="M19.6875 8.2L14.0625 13.825L10.625 10.3875L11.95 9.0625L14.0625 11.175L18.3625 6.875L19.6875 8.2ZM5.625 8.75C7.16875 8.75 8.125 7.79375 8.125 6.25C8.125 4.70625 7.16875 3.75 5.625 3.75C4.08125 3.75 3.125 4.70625 3.125 6.25C3.125 7.79375 4.08125 8.75 5.625 8.75ZM5.625 10C2.54063 10 0.625 11.9156 0.625 15H10.625C10.625 11.9156 8.70938 10 5.625 10Z" />
    </>
  ),
};

export const followingIcon: LoadedIconFunction = createIcon(
  "following",
  iconDefinition,
);
