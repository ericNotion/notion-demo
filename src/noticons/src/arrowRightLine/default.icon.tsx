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
      <path d="M9.45 5L14.45 10L9.45 15L8.125 13.675L10.8625 10.9375H1.875V9.0625H10.8625L8.125 6.325L9.45 5ZM15.625 3.125V16.875H17.5V3.125H15.625Z" />
    </>
  ),
};

export const arrowRightLineIcon: LoadedIconFunction = createIcon(
  "arrowRightLine",
  iconDefinition,
);
