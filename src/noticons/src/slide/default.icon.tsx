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
      <path d="M15 3.125H5C3.45625 3.125 2.5 4.08125 2.5 5.625V14.375C2.5 15.9187 3.45625 16.875 5 16.875H15C16.5437 16.875 17.5 15.9187 17.5 14.375V5.625C17.5 4.08125 16.5437 3.125 15 3.125ZM15.625 13.125H4.375V6.875H15.625V13.125Z" />
    </>
  ),
};

export const slideIcon: LoadedIconFunction = createIcon(
  "slide",
  iconDefinition,
);
