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
      <path d="M15.3125 4.6875V15.3125H4.6875V13.4375H12.1125L4.0625 5.3875L5.3875 4.0625L13.4375 12.1125V4.6875H15.3125Z" />
    </>
  ),
};

export const arrowSoutheastIcon: LoadedIconFunction = createIcon(
  "arrowSoutheast",
  iconDefinition,
);
