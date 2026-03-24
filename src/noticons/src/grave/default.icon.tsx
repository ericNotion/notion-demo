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
      <path d="M10 2.5C6.31875 2.5 4.99687 5.625 3.125 5.625V17.5H16.875V5.625C15.0031 5.625 13.6812 2.5 10 2.5ZM10.8344 15.625H9.16563L5.9375 12.3969L6.45937 11.875C7.78125 11.875 8.86562 12.5938 9.375 13.6812V10.5438C8.29688 10.2656 7.5 9.29063 7.5 8.125V5.625H8.125L8.90625 7.1875L9.6875 5.625H10.3125L11.0938 7.1875L11.875 5.625H12.5V8.125C12.5 9.29063 11.7031 10.2656 10.625 10.5438V13.6812C11.1344 12.5938 12.2188 11.875 13.5406 11.875L14.0625 12.3969L10.8344 15.625Z" />
    </>
  ),
};

export const graveIcon: LoadedIconFunction = createIcon(
  "grave",
  iconDefinition,
);
