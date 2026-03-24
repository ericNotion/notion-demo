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
      <path d="M12.5 4.375L10 5.625L7.5 4.375L0.625 7.8125C0.625 7.8125 2.55313 15.625 10 15.625C17.4469 15.625 19.375 7.8125 19.375 7.8125L12.5 4.375ZM10 11.875C6.1875 11.875 5 9.375 5 9.375L7.5 8.125L8.81562 8.78438C9.18437 8.96875 9.5875 9.0625 10 9.0625C10.4125 9.0625 10.8156 8.96563 11.1844 8.78438L12.5 8.125L15 9.375C15 9.375 13.8125 11.875 10 11.875Z" />
    </>
  ),
};

export const mouthIcon: LoadedIconFunction = createIcon(
  "mouth",
  iconDefinition,
);
