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
      <path d="M18.125 16.25V17.5H1.875V16.25L8.75 9.375H11.25L18.125 16.25ZM8.75 8.125H11.25C11.25 6.96875 11.9688 6.25 13.125 6.25H15C15 4.9 14.0437 4.0625 12.5 4.0625C12.3938 4.0625 12.2875 4.06875 12.1875 4.075C12.1875 4.07188 12.1875 4.06562 12.1875 4.0625C12.1875 2.7125 11.35 1.875 10 1.875C8.65 1.875 7.8125 2.7125 7.8125 4.0625C7.8125 4.06562 7.8125 4.07188 7.8125 4.075C7.70937 4.06562 7.60625 4.0625 7.5 4.0625C5.95625 4.0625 5 4.9 5 6.25H6.875C8.03125 6.25 8.75 6.96875 8.75 8.125Z" />
    </>
  ),
};

export const volcanoIcon: LoadedIconFunction = createIcon(
  "volcano",
  iconDefinition,
);
