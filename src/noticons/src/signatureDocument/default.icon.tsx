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
      <path d="M9.375 2.5H3.75V17.5H16.25V9.375H9.375V2.5ZM10.625 14.375H15V15.625H10.625V14.375ZM9.375 14.7406L8.49062 15.625L7.1875 14.3219L5.88438 15.625L5 14.7406L6.30312 13.4375L5 12.1344L5.88438 11.25L7.1875 12.5531L8.49062 11.25L9.375 12.1344L8.07188 13.4375L9.375 14.7406ZM16.25 6.875V8.125H10.625V2.5H11.875L16.25 6.875Z" />
    </>
  ),
};

export const signatureDocumentIcon: LoadedIconFunction = createIcon(
  "signatureDocument",
  iconDefinition,
);
