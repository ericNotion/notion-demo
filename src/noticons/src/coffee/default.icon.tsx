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
      <path d="M17.5 4.375H15.1562L14.8438 2.5H5.15625L4.84375 4.375H2.5V6.25H4.0625L5.9375 17.5H14.0625L15.9375 6.25H17.5V4.375ZM7.525 15.625L7.2125 13.75H12.7844L12.4719 15.625H7.525ZM13.7219 8.125H6.275L5.9625 6.25H14.0344L13.7219 8.125Z" />
    </>
  ),
};

export const coffeeIcon: LoadedIconFunction = createIcon(
  "coffee",
  iconDefinition,
);
