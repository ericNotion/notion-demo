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
      <path d="M3.125 3.125V16.875H16.875V3.125H3.125ZM10 11.5625C9.1375 11.5625 8.4375 10.8625 8.4375 10C8.4375 9.1375 9.1375 8.4375 10 8.4375C10.8625 8.4375 11.5625 9.1375 11.5625 10C11.5625 10.8625 10.8625 11.5625 10 11.5625Z" />
    </>
  ),
};

export const die1Icon: LoadedIconFunction = createIcon("die1", iconDefinition);
