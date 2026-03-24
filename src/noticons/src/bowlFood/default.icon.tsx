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
      <path d="M14.0406 15.125L13.75 16.875H6.25L5.95937 15.125C3.37188 13.9281 1.875 11.4656 1.875 8.125H18.125C18.125 11.4656 16.6281 13.9281 14.0406 15.125ZM12.5 6.875H16.25C16.25 4.94688 15.0531 3.75 13.125 3.75C12.5656 3.75 12.0687 3.85312 11.6437 4.04375C10.8937 3.05625 9.68125 2.5 8.125 2.5C5.425 2.5 3.75 4.175 3.75 6.875H12.5Z" />
    </>
  ),
};

export const bowlFoodIcon: LoadedIconFunction = createIcon(
  "bowlFood",
  iconDefinition,
);
