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
      <path d="M16.875 13.0344L13.7906 9.95001C14.4344 9.70626 15.0531 9.40001 15.625 9.01564L12.4875 5.87814C13.1531 5.67189 13.7937 5.38439 14.375 4.99689L10.625 1.24689H9.375L5.625 4.99689C6.1875 5.37189 6.82812 5.66564 7.51562 5.87501L4.375 9.01564C4.93438 9.38751 5.55312 9.70001 6.2125 9.94689L3.125 13.0344C4.70312 14.0906 6.68125 14.7406 8.75 14.9344V17.5H11.25V14.9375C13.2437 14.7594 15.2094 14.15 16.875 13.0344Z" />
    </>
  ),
};

export const coniferTreeIcon: LoadedIconFunction = createIcon(
  "coniferTree",
  iconDefinition,
);
