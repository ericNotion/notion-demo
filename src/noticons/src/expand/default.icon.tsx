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
      <path d="M9.04375 12.2812L5.7 15.625H8.4375V17.5H2.5V11.5625H4.375V14.3L7.71875 10.9563L9.04375 12.2812ZM11.5625 2.5V4.375H14.3L10.9563 7.71875L12.2812 9.04375L15.625 5.7V8.4375H17.5V2.5H11.5625ZM15.625 14.3L12.2812 10.9563L10.9563 12.2812L14.3 15.625H11.5625V17.5H17.5V11.5625H15.625V14.3ZM4.375 5.7L7.71875 9.04375L9.04375 7.71875L5.7 4.375H8.4375V2.5H2.5V8.4375H4.375V5.7Z" />
    </>
  ),
};

export const expandIcon: LoadedIconFunction = createIcon(
  "expand",
  iconDefinition,
);
