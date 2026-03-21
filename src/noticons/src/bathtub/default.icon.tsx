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
      <path d="M18.75 10H17.5V13.125C17.5 14.6687 16.5437 15.625 15 15.625V17.5H13.125V15.625H8.125V17.5H6.25V15.5062C5.2375 15.2594 4.5 14.625 3.9625 13.5531L2.1875 10H1.25V8.125H15.625V5.3125C15.625 4.67188 15.3281 4.375 14.6875 4.375C14.0469 4.375 13.75 4.67188 13.75 5.3125V6.25H11.875V5.3125C11.875 3.63125 13.0063 2.5 14.6875 2.5C16.3687 2.5 17.5 3.63125 17.5 5.3125V8.125H18.75V10Z" />
    </>
  ),
};

export const bathtubIcon: LoadedIconFunction = createIcon(
  "bathtub",
  iconDefinition,
);
