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
      <path d="M10 10.625C10 8.3125 11.675 6.875 14.375 6.875C17.075 6.875 18.75 8.3125 18.75 10.625H10ZM18.75 11.875H10C9.61563 11.875 9.375 12.1156 9.375 12.5V13.125C9.375 13.5094 9.61563 13.75 10 13.75H18.75C19.1344 13.75 19.375 13.5094 19.375 13.125V12.5C19.375 12.1156 19.1344 11.875 18.75 11.875ZM10 15.625C10 16.3969 10.4781 16.875 11.25 16.875H17.5C18.2719 16.875 18.75 16.3969 18.75 15.625V15H10V15.625ZM10 6.875V5H6.88125L7.18125 1.40625L5.3125 1.25L5 5H0V6.875H1.40625L2.24062 16.875H7.7625L8.59688 6.875H10.0031H10Z" />
    </>
  ),
};

export const foodAndDrinkIcon: LoadedIconFunction = createIcon(
  "foodAndDrink",
  iconDefinition,
);
