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
      <path d="M16.875 9.375C16.875 10.5312 16.1562 11.25 15 11.25H5.625C4.08125 11.25 3.125 10.2937 3.125 8.75C3.125 7.42812 3.83125 6.5375 5.00313 6.30938C5.00313 6.29063 5.00313 6.26875 5.00313 6.25C5.00313 3.9375 6.44062 2.5 8.75313 2.5C10.5062 2.5 11.7563 3.325 12.2563 4.73438C12.4313 4.70312 12.6187 4.6875 12.8156 4.6875C14.3594 4.6875 15.3156 5.64375 15.3156 7.1875C15.3156 7.30312 15.3094 7.41563 15.2969 7.525C16.2781 7.64062 16.8781 8.32188 16.8781 9.375H16.875ZM5.3125 13.75H14.6875V12.5H5.3125V13.75ZM3.75 16.25H13.125V15H3.75V16.25Z" />
    </>
  ),
};

export const fogIcon: LoadedIconFunction = createIcon("fog", iconDefinition);
