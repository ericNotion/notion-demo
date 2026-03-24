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
      <path d="M12.5 7.5H17.5V13.125H8.75V2.5H12.5V7.5ZM7.5 6.875H2.5V17.5H11.25V14.375H7.5V6.875ZM15 2.5H13.75V6.25H17.5V5L15 2.5Z" />
    </>
  ),
};

export const copyIcon: LoadedIconFunction = createIcon("copy", iconDefinition);
