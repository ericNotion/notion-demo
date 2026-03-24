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
      <path d="M18.75 13.75H16.875V15.625H13.75V11.25H6.25V15.625H3.125V13.75H1.25V6.25H3.125V4.375H6.25V8.75H13.75V4.375H16.875V6.25H18.75V13.75Z" />
    </>
  ),
};

export const gymIcon: LoadedIconFunction = createIcon("gym", iconDefinition);
