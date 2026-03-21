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
      <path d="M14.0406 13.25L13.75 15H6.25L5.95937 13.25C3.37188 12.0531 1.875 9.59062 1.875 6.25H18.125C18.125 9.59062 16.6281 12.0531 14.0406 13.25Z" />
    </>
  ),
};

export const bowlIcon: LoadedIconFunction = createIcon("bowl", iconDefinition);
