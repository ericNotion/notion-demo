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
      <path d="M12.5 10C12.5 11.3812 11.3813 12.5 10 12.5C8.61875 12.5 7.5 11.3812 7.5 10C7.5 8.61875 8.61875 7.5 10 7.5C11.3813 7.5 12.5 8.61875 12.5 10ZM18.75 10C18.75 10 15.3344 16.25 10 16.25C4.66563 16.25 1.25 10 1.25 10C1.25 10 4.66563 3.75 10 3.75C15.3344 3.75 18.75 10 18.75 10ZM14.375 10C14.375 7.58437 12.4156 5.625 10 5.625C7.58437 5.625 5.625 7.58437 5.625 10C5.625 12.4156 7.58437 14.375 10 14.375C12.4156 14.375 14.375 12.4156 14.375 10Z" />
    </>
  ),
};

export const viewIcon: LoadedIconFunction = createIcon("view", iconDefinition);
