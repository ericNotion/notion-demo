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
      <path d="M17.8125 13.3563L13.75 17.4188L9.6875 13.3563L11.0125 12.0313L12.8125 13.8313V3.12505H14.6875V13.8313L16.4875 12.0313L17.8125 13.3563ZM10.3125 6.6438L6.25 2.5813L2.1875 6.6438L3.5125 7.9688L5.3125 6.1688V16.875H7.1875V6.1688L8.9875 7.9688L10.3125 6.6438Z" />
    </>
  ),
};

export const swapVerticallyIcon: LoadedIconFunction = createIcon(
  "swapVertically",
  iconDefinition,
);
