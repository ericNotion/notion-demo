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
      <path d="M1.875 12.8125H5V15.9375H1.875V12.8125ZM5 4.0625H1.875V7.1875H5V4.0625ZM9.375 8.4375H1.875V11.5625H9.375V8.4375ZM13.75 4.0625H6.25V7.1875H13.75V4.0625ZM15 4.0625V7.1875H18.125V4.0625H15ZM10.625 11.5625H18.125V8.4375H10.625V11.5625ZM15 15.9375H18.125V12.8125H15V15.9375ZM6.25 15.9375H13.75V12.8125H6.25V15.9375Z" />
    </>
  ),
};

export const wallIcon: LoadedIconFunction = createIcon("wall", iconDefinition);
