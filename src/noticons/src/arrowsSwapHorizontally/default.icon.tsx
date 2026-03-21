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
      <path d="M18.3563 5.625L14.2938 9.6875L12.9688 8.3625L14.7688 6.5625H13.75C12.0688 6.5625 10.9375 7.69375 10.9375 9.375V10.625C10.9375 13.3406 8.96563 15.3125 6.25 15.3125H5.23125L7.03125 17.1125L5.70625 18.4375L1.64375 14.375L5.70625 10.3125L7.03125 11.6375L5.23125 13.4375H6.25C7.93125 13.4375 9.0625 12.3062 9.0625 10.625V9.375C9.0625 6.65938 11.0344 4.6875 13.75 4.6875H14.7688L12.9688 2.8875L14.2938 1.5625L18.3563 5.625Z" />
    </>
  ),
};

export const arrowsSwapHorizontallyIcon: LoadedIconFunction = createIcon(
  "arrowsSwapHorizontally",
  iconDefinition,
);
