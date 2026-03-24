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
      <path d="M17.5 15.625C17.5 16.6594 16.6594 17.5 15.625 17.5C14.5906 17.5 13.75 16.6594 13.75 15.625C13.75 14.8094 14.2719 14.1156 15 13.8594V13.125H8.125V13.8594C8.85313 14.1156 9.375 14.8094 9.375 15.625C9.375 16.6594 8.53438 17.5 7.5 17.5C6.46563 17.5 5.625 16.6594 5.625 15.625C5.625 14.8094 6.14687 14.1156 6.875 13.8594V12.8906L5.45625 4.375H2.5V2.5H5.84063C6.58125 2.5 7.08437 2.70938 7.60938 3.23125L15.5188 11.1406C16.0437 11.6656 16.25 12.1688 16.25 12.9094V13.8594C16.9781 14.1156 17.5 14.8094 17.5 15.625Z" />
    </>
  ),
};

export const strollerIcon: LoadedIconFunction = createIcon(
  "stroller",
  iconDefinition,
);
