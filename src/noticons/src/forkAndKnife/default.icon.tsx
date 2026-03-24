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
      <path d="M8.75 2.5H10V7.1875C10 8.58437 9.30312 9.55313 8.125 9.87813V17.5H6.25V9.87813C5.07187 9.55313 4.375 8.58437 4.375 7.1875V2.5H5.625V7.1875H6.5625V2.5H7.8125V7.1875H8.75V2.5ZM11.25 9.35938V9.98438H13.125V17.5H15V2.5C12.6406 2.5 11.25 4.29688 11.25 9.35938Z" />
    </>
  ),
};

export const forkAndKnifeIcon: LoadedIconFunction = createIcon(
  "forkAndKnife",
  iconDefinition,
);
