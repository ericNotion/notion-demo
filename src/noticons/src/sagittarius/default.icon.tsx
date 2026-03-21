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
      <path d="M16.875 3.125V11.875H15V6.325L10.075 11.25L14.375 15.55L13.05 16.875L8.75 12.575L3.825 17.5L2.5 16.175L7.425 11.25L3.125 6.95L4.45 5.625L8.75 9.925L13.675 5H8.125V3.125H16.875Z" />
    </>
  ),
};

export const sagittariusIcon: LoadedIconFunction = createIcon(
  "sagittarius",
  iconDefinition,
);
