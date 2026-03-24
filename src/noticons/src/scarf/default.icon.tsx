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
      <path d="M15.3656 14.9563L16.25 15.8406L14.925 17.1656L14.0406 16.2812L13.1562 17.1656L14.0406 18.05L12.7156 19.375L11.8313 18.4906C10.5813 17.2406 10 15.8375 10 14.0719V8.75H15V14.0719C15 14.5219 15.0469 14.6375 15.3656 14.9563ZM3.125 3.125V7.5H16.875V3.125H3.125Z" />
    </>
  ),
};

export const scarfIcon: LoadedIconFunction = createIcon(
  "scarf",
  iconDefinition,
);
