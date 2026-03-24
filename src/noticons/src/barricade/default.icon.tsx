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
      <path d="M15.625 4.375V2.5H13.75V4.375H6.25V2.5H4.375V4.375H2.5V11.875H4.375V17.5H6.25V11.875H13.75V17.5H15.625V11.875H17.5V4.375H15.625ZM5.625 10H4.375V6.25H6.875L5.625 10ZM10.625 10H8.125L9.375 6.25H11.875L10.625 10ZM15.625 10H13.125L14.375 6.25H15.625V10Z" />
    </>
  ),
};

export const barricadeIcon: LoadedIconFunction = createIcon(
  "barricade",
  iconDefinition,
);
