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
      <path d="M11.0563 14.6531C11.2 15.375 11.25 15.8781 11.25 16.6156V17.5H3.125V16.6156C3.125 15.8812 3.175 15.375 3.31875 14.6531L5 6.25H9.375L11.0563 14.6531ZM9.375 2.5H5V5H9.375V2.5ZM15 2.5V3.75H12.5V8.75H15V17.5H16.875V2.5H15Z" />
    </>
  ),
};

export const dentalIcon: LoadedIconFunction = createIcon(
  "dental",
  iconDefinition,
);
