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
      <path d="M3.75 13.125H16.25V16.875H3.75V13.125ZM13.75 7.5H10.9375V5H9.0625V7.5H6.25C4.70625 7.5 3.75 8.45625 3.75 10V11.875H16.25V10C16.25 8.45625 15.2937 7.5 13.75 7.5ZM10 4.0625C10.6906 4.0625 11.25 3.50312 11.25 2.8125C11.25 2.12188 10.9187 1.75625 10 0.625C9.08125 1.75625 8.75 2.12188 8.75 2.8125C8.75 3.50312 9.30937 4.0625 10 4.0625Z" />
    </>
  ),
};

export const cakeIcon: LoadedIconFunction = createIcon("cake", iconDefinition);
