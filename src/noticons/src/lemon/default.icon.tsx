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
      <path d="M16.25 7.5C16.25 8.05 16.125 8.525 15.9 8.90938C16.125 9.6125 16.25 10.3938 16.25 11.25C16.25 15.1062 13.8562 17.5 10 17.5C9.14375 17.5 8.3625 17.375 7.65938 17.15C7.275 17.3781 6.8 17.5 6.25 17.5C4.70625 17.5 3.75 16.5437 3.75 15C3.75 14.45 3.875 13.975 4.1 13.5906C3.875 12.8875 3.75 12.1062 3.75 11.25C3.75 7.39375 6.14375 5 10 5C10.8562 5 11.6375 5.125 12.3406 5.35C12.725 5.12188 13.2 5 13.75 5C13.9719 5 14.1781 5.02188 14.375 5.05938V3.75H12.1875C10.6438 3.75 9.6875 2.79375 9.6875 1.25H13.75C15.2937 1.25 16.25 2.20625 16.25 3.75V7.5Z" />
    </>
  ),
};

export const lemonIcon: LoadedIconFunction = createIcon(
  "lemon",
  iconDefinition,
);
