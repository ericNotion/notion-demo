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
      <path d="M13.8625 12.8344C14.2438 13.975 14.375 14.7969 14.375 15.9969V17.5H5.625V15.9969C5.625 14.7969 5.75937 13.975 6.1375 12.8344L6.875 10.625L5.82812 8.53125C5.67812 8.23438 5.625 8.00625 5.625 7.67188C5.625 7.10312 5.78437 6.71563 6.1875 6.3125L8.4375 4.0625V1.875H11.5625V4.0625L13.8125 6.3125C14.2156 6.71563 14.375 7.10312 14.375 7.67188C14.375 8.00625 14.3219 8.23438 14.1719 8.53125L13.125 10.625L13.8625 12.8344Z" />
    </>
  ),
};

export const dishSoapIcon: LoadedIconFunction = createIcon(
  "dishSoap",
  iconDefinition,
);
