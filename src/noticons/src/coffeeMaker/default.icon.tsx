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
      <path d="M7.5 15.625H16.25V17.5H2.5V5C2.5 3.45625 3.45625 2.5 5 2.5H15L16.25 5V6.25H7.5V15.625ZM18.75 9.375V10.4688C18.75 11.625 18.0312 12.3438 16.875 12.3438H16.25V12.5C16.25 13.6562 15.5312 14.375 14.375 14.375H10.625C9.46875 14.375 8.75 13.6562 8.75 12.5V7.5H16.875C18.0312 7.5 18.75 8.21875 18.75 9.375ZM17.5 9.375C17.5 8.90625 17.3438 8.75 16.875 8.75H16.25V11.0938H16.875C17.3438 11.0938 17.5 10.9375 17.5 10.4688V9.375Z" />
    </>
  ),
};

export const coffeeMakerIcon: LoadedIconFunction = createIcon(
  "coffeeMaker",
  iconDefinition,
);
