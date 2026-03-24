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
      <path d="M10 13.2719L17.5 9.52187V17.5H2.5V9.52187L10 13.2719ZM10 1.875L2.5 5.625V8.125L5.625 9.6875V6.25H14.375V9.6875L17.5 8.125V5.625L10 1.875Z" />
    </>
  ),
};

export const invitationIcon: LoadedIconFunction = createIcon(
  "invitation",
  iconDefinition,
);
