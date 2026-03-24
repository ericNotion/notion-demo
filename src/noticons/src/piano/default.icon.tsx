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
      <path d="M13.75 4.21875V2.34375H10.625V4.21875H9.375V2.34375H6.25V4.21875H2.5V14.8438C2.5 16.225 3.61875 17.3438 5 17.3438H15C16.3813 17.3438 17.5 16.225 17.5 14.8438V4.21875H13.75ZM5 15.4688C4.65625 15.4688 4.375 15.1875 4.375 14.8438V6.09375H6.25V11.0938H6.875V15.4688H5ZM8.75 15.4688V11.0938H9.375V6.09375H10.625V11.0938H11.25V15.4688H8.75ZM15.625 14.8438C15.625 15.1875 15.3438 15.4688 15 15.4688H13.125V11.0938H13.75V6.09375H15.625V14.8438Z" />
    </>
  ),
};

export const pianoIcon: LoadedIconFunction = createIcon(
  "piano",
  iconDefinition,
);
