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
      <path d="M16.25 11.25V17.5H3.75V11.25L8.125 2.5H11.875L12.3719 3.49063L11.325 5.5875L10.7188 4.375H9.2875L5.85 11.25H9.89375L13.9563 3.125L15.6344 3.9625L11.9906 11.25H14.1594L13.775 10.4781L14.8219 8.38125L16.2563 11.2469L16.25 11.25Z" />
    </>
  ),
};

export const metronomeIcon: LoadedIconFunction = createIcon(
  "metronome",
  iconDefinition,
);
