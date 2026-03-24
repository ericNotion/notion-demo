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
      <path d="M18.75 10C18.75 11.5437 17.9125 12.5 16.5625 12.5C15.2125 12.5 14.375 11.5437 14.375 10C14.375 9 14.7312 8.24687 15.3469 7.84062C14.3906 5.63125 12.3094 4.375 9.375 4.375H8.4375V5.625H9.6875V8.00937C11.35 8.82187 12.5 10.525 12.5 12.5C12.5 14.0781 11.7656 15.4844 10.625 16.4V17.5H4.375V16.4C3.23438 15.4844 2.5 14.0781 2.5 12.5C2.5 10.525 3.65 8.82187 5.3125 8.00937V5.625H6.5625V2.5H9.375C13.2781 2.5 16.125 4.42187 17.2656 7.59687C18.1969 7.87812 18.75 8.74375 18.75 10Z" />
    </>
  ),
};

export const perfumeIcon: LoadedIconFunction = createIcon(
  "perfume",
  iconDefinition,
);
