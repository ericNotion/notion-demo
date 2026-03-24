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
      <path d="M18.125 11.875V16.25H16.25V13.75H3.75V16.25H1.875V4.375H3.75V6.875H6.875C8.41875 6.875 9.375 7.83125 9.375 9.375H15.625C17.1687 9.375 18.125 10.3313 18.125 11.875Z" />
    </>
  ),
};

export const bedIcon: LoadedIconFunction = createIcon("bed", iconDefinition);
