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
      <path d="M16.25 6.875V8.125H10.625V2.5H11.875L16.25 6.875ZM9.375 2.5H3.75V17.5H9.375V13.3844L7.75938 15L6.875 14.1156L10 10.9906L13.125 14.1156L12.2406 15L10.625 13.3844V17.5H16.25V9.375H9.375V2.5Z" />
    </>
  ),
};

export const uploadDocumentIcon: LoadedIconFunction = createIcon(
  "uploadDocument",
  iconDefinition,
);
