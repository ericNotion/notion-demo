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
      <path d="M14.6875 8.75H5.3125V7.07187C5.3125 6.36562 5.60313 5.89688 6.23438 5.58125L6.875 5.25938V3.94688C6.875 3.24063 7.16563 2.77188 7.79688 2.45625L8.75 1.97812V0H9.0625C10.6062 0 11.5625 0.95625 11.5625 2.5V3.4375H11.875C12.6469 3.4375 13.125 3.91563 13.125 4.6875V5.625H13.4375C14.2094 5.625 14.6875 6.10313 14.6875 6.875V8.75ZM4.6875 10V11.875H5.6125C5.925 12.7625 6.47188 13.4688 7.21875 13.95L7.80937 17.5H12.1844L12.775 13.95C13.5219 13.4688 14.0688 12.7625 14.3813 11.875H15.3062V10H4.6875Z" />
    </>
  ),
};

export const softServeIcon: LoadedIconFunction = createIcon(
  "softServe",
  iconDefinition,
);
