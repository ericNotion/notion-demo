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
      <path d="M15.625 6.25H11.875V4.375H1.875V14.375H3.75V15C3.75 16.0344 4.59063 16.875 5.625 16.875C6.65938 16.875 7.5 16.0344 7.5 15V14.375H12.5V15C12.5 16.0344 13.3406 16.875 14.375 16.875C15.4094 16.875 16.25 16.0344 16.25 15V14.375H18.125V11.25L15.625 6.25ZM11.875 10.625V8.125H14.4656L15.7156 10.625H11.875Z" />
    </>
  ),
};

export const deliveryTruckIcon: LoadedIconFunction = createIcon(
  "deliveryTruck",
  iconDefinition,
);
