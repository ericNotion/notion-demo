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
      <path d="M15 3.125H13.75L12.7094 6.25H11.6688L10.6281 3.125H9.37813L8.33751 6.25H7.29688L6.25626 3.125H5.00626C3.70626 7.02812 2.50626 8.85313 2.50626 11.25C2.50626 15.1062 5.37813 17.5 10.0063 17.5C14.6344 17.5 17.5063 15.1062 17.5063 11.25C17.5063 8.85313 16.3063 7.02812 15.0063 3.125H15ZM13.75 13.75H6.25001V8.75H13.75V13.75Z" />
    </>
  ),
};

export const tulipNameTagIcon: LoadedIconFunction = createIcon(
  "tulipNameTag",
  iconDefinition,
);
