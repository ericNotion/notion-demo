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
      <path d="M17.5 6.875V11.25L16.25 12.5V16.875H11.25V13.75C11.25 12.9781 10.7719 12.5 10 12.5C9.22813 12.5 8.75 12.9781 8.75 13.75V16.875H3.75V12.5L2.5 11.25V6.875H3.75V8.125H5V6.875H6.25V8.75H7.5V6.25L9.375 4.375V0.625H13.125V1.875L10.625 3.125V4.375L12.5 6.25V8.75H13.75V6.875H15V8.125H16.25V6.875H17.5Z" />
    </>
  ),
};

export const castleIcon: LoadedIconFunction = createIcon(
  "castle",
  iconDefinition,
);
