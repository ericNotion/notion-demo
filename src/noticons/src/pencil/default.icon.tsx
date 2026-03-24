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
      <path d="M12.2406 5.55L14.45 7.75938L5.95937 16.25L2.94062 17.5L2.5 17.0594L3.75 14.0406L12.2406 5.55ZM15.2906 2.5L13.125 4.66563L15.3344 6.875L17.5 4.70937L15.2906 2.5Z" />
    </>
  ),
};

export const pencilIcon: LoadedIconFunction = createIcon(
  "pencil",
  iconDefinition,
);
