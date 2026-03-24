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
      <path d="M19.0625 13.75L16.25 14.6875L14.375 9.0625V17.5H10.625V6.81562C10.625 6.075 10.8344 5.57188 11.3562 5.04688L12.1875 4.21562C12.1875 4.21562 11.6844 3.12187 10 3.12187C8.31563 3.12187 7.8125 4.21562 7.8125 4.21562L8.64375 5.04688C9.16875 5.57188 9.375 6.075 9.375 6.81562V17.5H5.625V9.0625L3.75 14.6875L0.9375 13.75L4.25938 3.78125C4.54375 2.925 5.1375 2.5 6.0375 2.5H6.875C6.875 2.5 7.59375 1.25 10 1.25C12.4062 1.25 13.125 2.5 13.125 2.5H13.9625C14.8656 2.5 15.4562 2.92813 15.7406 3.78125L19.0625 13.75Z" />
    </>
  ),
};

export const coatIcon: LoadedIconFunction = createIcon("coat", iconDefinition);
