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
      <path d="M17.5 6.03437L15.8844 7.65L12.35 4.11563L13.9656 2.5L17.5 6.03437ZM3.75 12.7156L4.1375 13.1031L2.5 17.0594L2.94062 17.5L6.89687 15.8625L7.28437 16.25L8.9 14.6344L5.36562 11.1L3.75 12.7156ZM6.25 10.2156L9.78437 13.75L15 8.53437L11.4656 5L6.25 10.2156Z" />
    </>
  ),
};

export const crayonIcon: LoadedIconFunction = createIcon(
  "crayon",
  iconDefinition,
);
