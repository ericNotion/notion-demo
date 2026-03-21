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
      <path d="M12.1875 13.75C12.1875 11.875 15 11.25 15 6.875C15 4.375 13.75 2.5 13.75 2.5H6.25C6.25 2.5 5 4.375 5 6.875C5 11.25 7.8125 11.875 7.8125 13.75C7.8125 15 5.9375 15.625 5.9375 15.625V17.5H14.0625V15.625C14.0625 15.625 12.1875 15 12.1875 13.75ZM7.39687 4.375H12.6062C12.8563 4.98125 13.1281 5.87188 13.1281 6.875H6.87813C6.87813 5.87188 7.14688 4.98438 7.4 4.375H7.39687Z" />
    </>
  ),
};

export const beerIcon: LoadedIconFunction = createIcon("beer", iconDefinition);
