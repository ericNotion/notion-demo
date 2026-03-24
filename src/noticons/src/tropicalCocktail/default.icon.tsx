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
      <path d="M14.375 4.375V2.5H5.625V4.375C5.625 4.375 6.875 5.06562 6.875 6.25C6.875 7.43437 5.625 8.56875 5.625 10.625C5.625 12.6812 6.97812 13.9844 9.0625 14.3062V15.625H6.5625V17.5H13.4375V15.625H10.9375V14.3062C13.0219 13.9844 14.375 12.5813 14.375 10.625C14.375 8.56875 13.125 7.43437 13.125 6.25C13.125 5.06562 14.375 4.375 14.375 4.375ZM11.775 4.375C11.5594 4.73125 11.3875 5.15 11.3063 5.625H8.69375C8.60938 5.15 8.4375 4.73125 8.225 4.375H11.7781H11.775Z" />
    </>
  ),
};

export const tropicalCocktailIcon: LoadedIconFunction = createIcon(
  "tropicalCocktail",
  iconDefinition,
);
