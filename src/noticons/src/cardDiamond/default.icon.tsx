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
      <path d="M13.125 2.5H6.875C5.33125 2.5 4.375 3.45625 4.375 5V15C4.375 16.5437 5.33125 17.5 6.875 17.5H13.125C14.6687 17.5 15.625 16.5437 15.625 15V5C15.625 3.45625 14.6687 2.5 13.125 2.5ZM13.75 10.3125L13.0969 10.7156C12.1937 11.2719 11.4469 12.05 10.925 12.975L10.3125 14.0656H9.6875L9.075 12.975C8.55313 12.05 7.80625 11.2719 6.90313 10.7156L6.25 10.3125V9.6875L6.90313 9.28437C7.80625 8.72812 8.55313 7.95 9.075 7.025L9.6875 5.93437H10.3125L10.925 7.025C11.4469 7.95 12.1937 8.72812 13.0969 9.28437L13.75 9.6875V10.3125Z" />
    </>
  ),
};

export const cardDiamondIcon: LoadedIconFunction = createIcon(
  "cardDiamond",
  iconDefinition,
);
