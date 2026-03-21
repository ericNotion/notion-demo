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
      <path d="M3.75 15.625H16.25V17.5H3.75V15.625ZM15 9.375H11.25V8.125C11.25 6.47188 12.5 5.40312 12.5 3.75C12.5 2.20625 11.5437 1.25 10 1.25C8.45625 1.25 7.5 2.20625 7.5 3.75C7.5 5.40312 8.75 6.47188 8.75 8.125V9.375H5C3.45625 9.375 2.5 10.3313 2.5 11.875V14.375H17.5V11.875C17.5 10.3313 16.5437 9.375 15 9.375Z" />
    </>
  ),
};

export const rubberStampIcon: LoadedIconFunction = createIcon(
  "rubberStamp",
  iconDefinition,
);
