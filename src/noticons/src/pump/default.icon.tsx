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
      <path d="M18.75 14.375C18.75 14.375 17.5 16.25 13.75 16.25C12.15 16.25 10.6156 15.6156 9.48125 14.4812L7.1875 12.1875H5.625V16.25H4.0625L3.09063 10.425C2.47813 9.84688 1.875 8.91875 1.875 7.5C1.875 4.6125 4.375 3.75 4.375 3.75L12.9156 12.2906L15 11.25L18.75 13.125V14.375Z" />
    </>
  ),
};

export const pumpIcon: LoadedIconFunction = createIcon("pump", iconDefinition);
