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
      <path d="M16.875 5.31239H13.3281C15.0875 6.15614 16.25 7.93114 16.25 10.0811L15.3937 10.9374L11.25 6.79364V17.4999H8.75V6.79364L4.60625 10.9374L3.75 10.0811C3.75 7.93114 4.9125 6.15614 6.67188 5.31239H3.125V4.09989C5.0625 2.16239 7.89687 1.99051 10 3.56551C12.1031 1.99051 14.9375 2.16239 16.875 4.09989V5.31239Z" />
    </>
  ),
};

export const palmTreeIcon: LoadedIconFunction = createIcon(
  "palmTree",
  iconDefinition,
);
