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
      <path d="M7.5 7.5H3.75C3.75 5.57188 4.94688 4.375 6.875 4.375C7.43437 4.375 7.93125 4.47812 8.35625 4.66875C9.10625 3.68125 10.3188 3.125 11.875 3.125C14.575 3.125 16.25 4.8 16.25 7.5H7.5ZM18.125 8.75V10.625H16.875L15.8344 16.875H4.16563L3.125 10.625H1.875V8.75H18.125ZM9.0625 10.625V15H10.9375V10.625H9.0625ZM5.75625 15H7.1875V10.625H5.025L5.75312 15H5.75625ZM14.975 10.625H12.8125V15H14.2438L14.9719 10.625H14.975Z" />
    </>
  ),
};

export const laundryBasketIcon: LoadedIconFunction = createIcon(
  "laundryBasket",
  iconDefinition,
);
