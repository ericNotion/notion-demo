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
      <path d="M10.625 9.375H16.25V17.5H3.75V2.5H9.375V4.375H8.125V5.625H9.375V6.875H8.125V8.125H9.375V9.375H8.125V10.625H9.375V11.875H8.125V13.125H9.375C9.14687 13.5844 9.0625 13.9344 9.0625 14.45V15.625H10.9375V14.45C10.9375 13.9375 10.8531 13.5844 10.625 13.125V11.875H11.875V10.625H10.625V9.375ZM11.875 2.5H10.625V8.125H16.25V6.875L11.875 2.5Z" />
    </>
  ),
};

export const compressedDocumentIcon: LoadedIconFunction = createIcon(
  "compressedDocument",
  iconDefinition,
);
