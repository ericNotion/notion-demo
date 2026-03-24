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
      <path d="M17.5 6.25C17.5 7.02187 17.0219 7.5 16.25 7.5H15.3031C14.5625 7.5 14.0594 7.70937 13.5344 8.23125L8.23125 13.5344C7.70625 14.0594 7.5 14.5625 7.5 15.3031V16.25C7.5 17.0219 7.02187 17.5 6.25 17.5C5.47813 17.5 5 17.0219 5 16.25V15H3.75C2.97812 15 2.5 14.5219 2.5 13.75C2.5 12.9781 2.97812 12.5 3.75 12.5H4.69687C5.4375 12.5 5.94063 12.2906 6.46563 11.7688L11.7688 6.46563C12.2937 5.94063 12.5 5.4375 12.5 4.69687V3.75C12.5 2.97812 12.9781 2.5 13.75 2.5C14.5219 2.5 15 2.97812 15 3.75V5H16.25C17.0219 5 17.5 5.47813 17.5 6.25Z" />
    </>
  ),
};

export const boneIcon: LoadedIconFunction = createIcon("bone", iconDefinition);
