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
      <path d="M14.0625 10.275V11.3875C14.0625 13.1219 13.7812 14.3094 13.0062 15.8594L12.1875 17.4969H10.9375V12.8094C10.9375 12.2594 10.6125 11.8969 10.0594 11.8719C9.37187 11.8438 9.0625 12.1406 9.0625 12.8094V17.4969H7.8125L6.99375 15.8594C6.21875 14.3094 5.9375 13.1219 5.9375 11.3875V10.275C4.99375 9.34063 4.375 8.00313 4.375 6.25C4.375 3.85938 5.37812 2.5 7.1875 2.5C8.75 2.5 10 3.75 10 3.75C10 3.75 11.25 2.5 12.8125 2.5C14.6219 2.5 15.625 3.85938 15.625 6.25C15.625 8.00313 15.0063 9.34375 14.0625 10.275Z" />
    </>
  ),
};

export const toothIcon: LoadedIconFunction = createIcon(
  "tooth",
  iconDefinition,
);
