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
      <path d="M19.0625 13.75L16.25 14.6875L14.375 9.0625V17.5H5.625V9.0625L3.75 14.6875L0.9375 13.75L4.25938 3.78125C4.54375 2.925 5.1375 2.5 6.0375 2.5H7.5C7.5 2.5 7.85 4.375 10 4.375C12.15 4.375 12.5 2.5 12.5 2.5H13.9625C14.8656 2.5 15.4562 2.92813 15.7406 3.78125L19.0625 13.75Z" />
    </>
  ),
};

export const longSleeveShirtIcon: LoadedIconFunction = createIcon(
  "longSleeveShirt",
  iconDefinition,
);
