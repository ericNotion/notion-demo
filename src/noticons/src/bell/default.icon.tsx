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
      <path d="M16.875 13.75H3.125L4.95313 6.44063C5.6 3.85313 7.33437 2.5 10 2.5C12.6656 2.5 14.4 3.85313 15.0469 6.44063L16.875 13.75ZM10 17.5C11.4594 17.5 12.5 16.4594 12.5 15H7.5C7.5 16.4594 8.54063 17.5 10 17.5Z" />
    </>
  ),
};

export const bellIcon: LoadedIconFunction = createIcon("bell", iconDefinition);
