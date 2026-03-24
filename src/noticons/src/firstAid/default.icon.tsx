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
      <path d="M17.5 7.8125V12.1875H12.1875V17.5H7.8125V12.1875H2.5V7.8125H7.8125V2.5H12.1875V7.8125H17.5Z" />
    </>
  ),
};

export const firstAidIcon: LoadedIconFunction = createIcon(
  "firstAid",
  iconDefinition,
);
