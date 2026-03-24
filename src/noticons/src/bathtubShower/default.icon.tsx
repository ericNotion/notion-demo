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
      <path d="M18.75 11.875H17.5V15C17.5 16.5437 16.5437 17.5 15 17.5V19.375H13.125V17.5H8.125V19.375H6.25V17.3813C5.2375 17.1344 4.5 16.5 3.9625 15.4281L2.1875 11.875H1.25V10H15.625V3.33125C15.625 2.75625 15.3687 2.5 14.7937 2.5C14.5188 2.5 14.4031 2.54687 14.2062 2.74375L13.125 3.825V5.73125C13.125 6.10313 13.0219 6.35313 12.7594 6.61562L11.875 7.5L8.125 3.75L9.00938 2.86562C9.27188 2.60312 9.52188 2.5 9.89375 2.5H11.8L12.8813 1.41875C13.4281 0.871875 14.0188 0.625 14.7937 0.625C16.4125 0.625 17.5 1.7125 17.5 3.33125V10H18.75V11.875Z" />
    </>
  ),
};

export const bathtubShowerIcon: LoadedIconFunction = createIcon(
  "bathtubShower",
  iconDefinition,
);
