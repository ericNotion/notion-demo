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
      <path d="M12.8125 2.5V7.1875C12.8125 8.58437 12.1156 9.55313 10.9375 9.87813V17.5H9.0625V9.87813C7.88437 9.55313 7.1875 8.58437 7.1875 7.1875V2.5H8.4375V7.1875H9.375V2.5H10.625V7.1875H11.5625V2.5H12.8125Z" />
    </>
  ),
};

export const forkIcon: LoadedIconFunction = createIcon("fork", iconDefinition);
