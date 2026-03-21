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
      <path d="M10.349 13.0625H9.5812L6.99864 8.52557C7.06844 8.38597 7.12079 8.29873 7.17314 8.21148C7.22549 8.12423 7.27783 8.03698 7.34763 7.89738L12.6523 7.89738C12.7221 8.03698 12.7745 8.12423 12.8268 8.21148C12.8792 8.29873 12.9315 8.38597 13.0013 8.52557L10.349 13.0625Z" />
      <path d="M2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10ZM15.625 10C15.625 6.89453 13.1055 4.375 10 4.375C6.89453 4.375 4.375 6.89453 4.375 10C4.375 13.1055 6.89453 15.625 10 15.625C13.1055 15.625 15.625 13.1055 15.625 10Z" />
    </>
  ),
};

export const arrowCircleDownIcon: LoadedIconFunction = createIcon(
  "arrowCircleDown",
  iconDefinition,
);
