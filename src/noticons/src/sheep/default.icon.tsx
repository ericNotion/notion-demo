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
      <path d="M19.375 6.25L18.4969 7.56875C18.2375 7.95625 17.925 8.125 17.4562 8.125H15.9375L14.1813 10.7625C13.6625 11.5406 13.0344 11.875 12.1 11.875H11.875V15.625L12.5 16.875H10.3125L9.6875 15.625V11.875H6.59688C5.94063 12.7937 4.95312 13.4094 3.69375 13.6406L5.30937 16.875H3.12187L1.24687 13.125L1.87187 12.8125V9.375H0.625V8.75C0.625 7.20625 1.58125 6.25 3.125 6.25H12.5L13.4375 5L12.5 3.125V2.5H12.7156C13.4562 2.5 13.9594 2.70938 14.4844 3.23125L15.0031 3.75H15.8156C16.1313 3.75 16.35 3.825 16.5969 4.025L19.3781 6.25H19.375Z" />
    </>
  ),
};

export const sheepIcon: LoadedIconFunction = createIcon(
  "sheep",
  iconDefinition,
);
