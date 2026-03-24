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
      <path d="M13.75 10L17.4312 12.125L15.5562 15.3719L11.875 13.2469V17.5H8.12498V13.2469L4.44373 15.3719L2.56873 12.125L6.24998 10L2.56873 7.875L4.44373 4.62813L8.12498 6.75313V2.5H11.875V6.75313L15.5562 4.62813L17.4312 7.875L13.75 10Z" />
    </>
  ),
};

export const starOfLifeIcon: LoadedIconFunction = createIcon(
  "starOfLife",
  iconDefinition,
);
