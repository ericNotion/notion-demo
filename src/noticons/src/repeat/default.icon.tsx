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
      <path d="M15.625 10H17.5V10.625C17.5 13.3406 15.5281 15.3125 12.8125 15.3125H5.85625L7.65625 17.1125L6.33125 18.4375L2.26875 14.375L6.33125 10.3125L7.65625 11.6375L5.85625 13.4375H12.8125C14.4937 13.4375 15.625 12.3062 15.625 10.625V10ZM4.375 9.375C4.375 7.69375 5.50625 6.5625 7.1875 6.5625H14.1437L12.3437 8.3625L13.6688 9.6875L17.7313 5.625L13.6688 1.5625L12.3437 2.8875L14.1437 4.6875H7.1875C4.47187 4.6875 2.5 6.65938 2.5 9.375V10H4.375V9.375Z" />
    </>
  ),
};

export const repeatIcon: LoadedIconFunction = createIcon(
  "repeat",
  iconDefinition,
);
