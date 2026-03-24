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
      <path d="M15 2.5L12.9406 4.55938L14.2656 5.88438L13.3813 6.76875L12.0563 5.44375L9.19064 8.30937L10.5156 9.63438L9.63126 10.5188L8.30626 9.19375L5.44064 12.0594L6.76564 13.3844L5.88126 14.2688L4.55626 12.9437L2.49689 15.0031V17.5031H17.4969V2.5H14.9969H15ZM13.75 13.75H9.05314L13.75 9.05312V13.75Z" />
    </>
  ),
};

export const setSquareIcon: LoadedIconFunction = createIcon(
  "setSquare",
  iconDefinition,
);
