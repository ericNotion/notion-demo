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
      <path d="M10.625 11.2719V8.125L15.625 5.625V4.375L10.625 1.875H9.375V11.2719C5.11875 11.4812 2.5 13.8219 2.5 17.5H17.5C17.5 13.8219 14.8813 11.4781 10.625 11.2719ZM10 15.625C8.275 15.625 6.875 14.925 6.875 14.0625C6.875 13.3062 7.95 12.675 9.375 12.5312V14.375H10.625V12.5312C12.05 12.675 13.125 13.3062 13.125 14.0625C13.125 14.925 11.725 15.625 10 15.625Z" />
    </>
  ),
};

export const golfIcon: LoadedIconFunction = createIcon("golf", iconDefinition);
