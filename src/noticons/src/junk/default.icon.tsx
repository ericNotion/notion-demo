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
      <path d="M18.125 3.125V5.625H1.875V3.125H18.125ZM3.125 6.875H16.875L15.2094 16.875H4.79063L3.125 6.875ZM9.11562 11.875L7.1875 13.8031L8.07188 14.6875L10 12.7594L11.9281 14.6875L12.8125 13.8031L10.8844 11.875L12.8125 9.94688L11.9281 9.0625L10 10.9906L8.07188 9.0625L7.1875 9.94688L9.11562 11.875Z" />
    </>
  ),
};

export const junkIcon: LoadedIconFunction = createIcon("junk", iconDefinition);
