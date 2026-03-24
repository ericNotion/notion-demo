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
      <path d="M14.9969 5L10.625 7.91563V1.875C7.17188 1.875 4.375 4.67188 4.375 8.125C4.375 8.77812 4.475 9.40938 4.6625 10H2.5C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 7.95312 16.5156 6.14062 14.9969 5ZM10 15.625C8.61875 15.625 7.5 14.5063 7.5 13.125C7.5 11.7437 8.61875 10.625 10 10.625V13.125L12.0813 11.7375C12.3469 12.1344 12.5 12.6125 12.5 13.125C12.5 14.5063 11.3813 15.625 10 15.625Z" />
    </>
  ),
};

export const fireIcon: LoadedIconFunction = createIcon("fire", iconDefinition);
