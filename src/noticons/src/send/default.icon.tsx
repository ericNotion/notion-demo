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
      <path d="M16.6156 2.5L3.49063 5.78125L2.5 6.77187L6.38438 10.6562L5 14.1156L5.88438 15L9.34375 13.6156L13.2281 17.5L14.2188 16.5094L17.5 3.38437L16.6156 2.5ZM10.5469 12.1656L9.79688 11.4156L7.77812 12.2219L8.58437 10.2031L7.83437 9.45312L15.2188 4.78125L10.5469 12.1656Z" />
    </>
  ),
};

export const sendIcon: LoadedIconFunction = createIcon("send", iconDefinition);
