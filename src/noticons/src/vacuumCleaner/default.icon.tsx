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
      <path d="M17.5 16.25V17.5H8.125V15.4093C8.125 14.6687 8.33437 14.1656 8.85625 13.6406L10.2375 12.2593L9.91562 11.6125L6.89687 13.1218L4.67813 8.6812C4.47813 8.27808 4.375 7.87183 4.375 7.47495C4.375 6.93433 4.58437 5.93433 5.79687 5.32808L6.57812 4.93745L6.46875 4.7187C6.33125 4.4437 6.21563 4.37183 5.90937 4.37183H3.125V2.49683H5.90937C6.91875 2.49683 7.69375 2.97495 8.14687 3.87808L13.275 14.1312L17.5031 16.2437L17.5 16.25Z" />
    </>
  ),
};

export const vacuumCleanerIcon: LoadedIconFunction = createIcon(
  "vacuumCleaner",
  iconDefinition,
);
