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
      <path d="M2.5 8.75H17.5V14.375C17.5 15.9187 16.5437 16.875 15 16.875H5C3.45625 16.875 2.5 15.9187 2.5 14.375V13.4375H6.61562L5 15.0531L5.88438 15.9375L9.00938 12.8125L5.88438 9.6875L5 10.5719L6.61562 12.1875H2.5V8.75ZM11.0125 5C10.0656 5 9.41875 4.73438 8.75 4.0625C8.07812 3.39062 7.43438 3.125 6.4875 3.125H2.5V7.5H17.5V5H11.0125Z" />
    </>
  ),
};

export const moveIcon: LoadedIconFunction = createIcon("move", iconDefinition);
