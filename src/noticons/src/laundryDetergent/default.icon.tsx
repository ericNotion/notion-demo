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
      <path d="M11.875 4.15V1.875H8.125V4.15C5.59063 5.26562 3.75 8.58125 3.75 12.5C3.75 14.3594 4.16563 16.0813 4.87188 17.5H15.1281C15.8344 16.0813 16.25 14.3594 16.25 12.5C16.25 8.58125 14.4094 5.26562 11.875 4.15ZM11.875 12.5V7.5H12.9656C13.825 8.76562 14.375 10.5531 14.375 12.5H11.875Z" />
    </>
  ),
};

export const laundryDetergentIcon: LoadedIconFunction = createIcon(
  "laundryDetergent",
  iconDefinition,
);
