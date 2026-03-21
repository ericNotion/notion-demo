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
      <path d="M7.8875 13.4375H15.3125V15.3125H4.6875V4.6875H6.5625V12.1125L14.6125 4.0625L15.9375 5.3875L7.8875 13.4375Z" />
    </>
  ),
};

export const arrowSouthwestIcon: LoadedIconFunction = createIcon(
  "arrowSouthwest",
  iconDefinition,
);
