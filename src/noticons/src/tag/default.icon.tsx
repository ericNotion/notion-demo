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
      <path d="M10.625 3.125H3.125V10.625L10.625 18.125L18.125 10.625L10.625 3.125ZM6.5625 7.5C6.04375 7.5 5.625 7.08125 5.625 6.5625C5.625 6.04375 6.04375 5.625 6.5625 5.625C7.08125 5.625 7.5 6.04375 7.5 6.5625C7.5 7.08125 7.08125 7.5 6.5625 7.5Z" />
    </>
  ),
};

export const tagIcon: LoadedIconFunction = createIcon("tag", iconDefinition);
