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
      <path d="M16.875 12.8125V17.5H3.125V12.8125H5V15.625H15V12.8125H16.875ZM15 9.45L13.675 8.125L10.9375 10.8625V1.875H9.0625V10.8625L6.325 8.125L5 9.45L10 14.45L15 9.45Z" />
    </>
  ),
};

export const saveIcon: LoadedIconFunction = createIcon("save", iconDefinition);
