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
      <path d="M17.4719 9.37501H10.625V2.52814C14.2688 2.82814 17.1719 5.73126 17.4719 9.37501ZM9.375 2.52814C5.525 2.84689 2.5 6.06876 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C11.8469 17.5 13.5344 16.8313 14.8406 15.725L9.375 10.2594V2.52814ZM15.725 14.8406C16.7063 13.6844 17.3406 12.225 17.4719 10.625H11.5094L15.725 14.8406Z" />
    </>
  ),
};

export const chartPieIcon: LoadedIconFunction = createIcon(
  "chartPie",
  iconDefinition,
);
