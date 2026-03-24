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
      <path d="M13.675 11.1938L15.375 16.4219L14.45 17.0938L10.0031 13.8625L5.52813 17.1125L4.61875 16.4531L6.32813 11.1938L1.79688 7.90313L2.13125 6.875H7.73125L9.45625 1.5625H10.5438L12.2688 6.875H17.8281L18.1688 7.92813L13.6719 11.1969L13.675 11.1938Z" />
    </>
  ),
};

export const starIcon: LoadedIconFunction = createIcon("star", iconDefinition);
