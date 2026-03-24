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
      <path d="M10 1.34064L2.5 5.67189V14.3313L10 18.6625L17.5 14.3313V5.67189L10 1.34064ZM10 10L4.375 6.75314L10 3.50626V10Z" />
    </>
  ),
};

export const hexagonFiveSixthsIcon: LoadedIconFunction = createIcon(
  "hexagonFiveSixths",
  iconDefinition,
);
