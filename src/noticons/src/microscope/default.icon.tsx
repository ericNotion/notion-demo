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
      <path d="M16.0406 10.0469L14.3594 13.4094L15.3594 15.4094C15.5531 15.7969 15.6219 16.0938 15.6219 16.5281V17.5H3.125V15.625H10.625V14.375H5V12.5H12.0187L13.5719 9.39375L11.3875 8.30312L10.225 10.625L6.87187 8.94687L10.0938 2.5L10.9312 2.91875L11.7656 1.25L13.4438 2.0875L12.6094 3.75625L13.4469 4.175L12.5031 6.0625L15.15 7.38437C15.825 7.72187 16.2437 8.4 16.2437 9.15625C16.2437 9.4625 16.1719 9.76875 16.0344 10.0406L16.0406 10.0469Z" />
    </>
  ),
};

export const microscopeIcon: LoadedIconFunction = createIcon(
  "microscope",
  iconDefinition,
);
