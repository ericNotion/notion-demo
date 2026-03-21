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
      <path d="M17.5 6.25H15.625V5H13.125V6.25H11.25V7.5H8.75V6.25H10V5H1.25V6.25H2.5V7.5H1.25V14.375H3.125V15C3.125 16.0344 3.96563 16.875 5 16.875C6.03438 16.875 6.875 16.0344 6.875 15V14.375H13.125V15C13.125 16.0344 13.9656 16.875 15 16.875C16.0344 16.875 16.875 16.0344 16.875 15V14.375H18.75V11.25L17.5 6.25ZM6.25 6.25H7.5V7.5H6.25V6.25ZM3.75 6.25H5V7.5H3.75V6.25ZM10 10.625H2.5V9.375H10V10.625ZM13.125 10.625V8.125H16.0375L16.6625 10.625H13.125Z" />
    </>
  ),
};

export const fireTruckIcon: LoadedIconFunction = createIcon(
  "fireTruck",
  iconDefinition,
);
