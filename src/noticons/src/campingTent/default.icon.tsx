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
      <path d="M16.875 15L10.9375 3.125H9.0625L3.125 15H1.25V16.875H18.75V15H16.875ZM7.1875 15L10 9.375L12.8125 15H7.1875Z" />
    </>
  ),
};

export const campingTentIcon: LoadedIconFunction = createIcon(
  "campingTent",
  iconDefinition,
);
