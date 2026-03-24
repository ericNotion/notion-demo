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
      <path d="M15.5062 7.79688L14.1812 2.5H5.81562L4.49062 7.79688C4.4125 8.10938 4.37187 8.42812 4.37187 8.75C4.37187 11.2125 5.9375 12.8188 9.05937 13.0813V15.625H6.55937V17.5H13.4344V15.625H10.9344V13.0813C14.0562 12.8188 15.6219 11.2125 15.6219 8.75C15.6219 8.42812 15.5812 8.10938 15.5031 7.79688H15.5062ZM12.7187 4.375L13.6562 8.125H6.34375L7.28125 4.375H12.7219H12.7187Z" />
    </>
  ),
};

export const wineIcon: LoadedIconFunction = createIcon("wine", iconDefinition);
