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
      <path d="M16.6156 5.59375L9.46563 12.7437C10.0094 12.9875 10.6125 13.125 11.25 13.125V15C9.8625 15 8.58437 14.5437 7.54688 13.7781L5.60313 15.7219C5.6125 15.7938 5.625 15.8625 5.625 15.9375C5.625 16.8 4.925 17.5 4.0625 17.5C3.2 17.5 2.5 16.8 2.5 15.9375C2.5 15.075 3.2 14.375 4.0625 14.375C4.1375 14.375 4.20625 14.3875 4.27812 14.3969L6.22187 12.4531C5.45625 11.4156 5 10.1375 5 8.75H6.875C6.875 9.38438 7.0125 9.9875 7.25625 10.5344L14.4062 3.38437L17.5 2.5L16.6156 5.59375Z" />
    </>
  ),
};

export const swordIcon: LoadedIconFunction = createIcon(
  "sword",
  iconDefinition,
);
