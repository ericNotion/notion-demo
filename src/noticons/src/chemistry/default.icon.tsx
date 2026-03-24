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
      <path d="M16.3125 13L12.8125 8.33437V4.375H14.375V2.5H5.625V4.375H7.1875V8.33437L3.6875 13C3.325 13.4844 3.125 14.0813 3.125 14.6875C3.125 16.2375 4.3875 17.5 5.9375 17.5H14.0625C15.6125 17.5 16.875 16.2375 16.875 14.6875C16.875 14.0813 16.675 13.4844 16.3125 13ZM9.0625 8.95937V4.375H10.9375V8.95937L13.125 11.875H6.875L9.0625 8.95937Z" />
    </>
  ),
};

export const chemistryIcon: LoadedIconFunction = createIcon(
  "chemistry",
  iconDefinition,
);
