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
      <path d="M12.8875 7.1875L11.5625 5.8625L16.175 1.25L17.5 2.575L12.8875 7.1875ZM8.4375 5.8625L3.825 1.25L2.5 2.575L7.1125 7.1875L8.4375 5.8625ZM3.125 8.125H16.875V10H15.625V15.625H16.875V17.5H3.125V15.625H4.375V10H3.125V8.125ZM11.875 15.625H13.125V10H11.875V15.625ZM6.875 15.625H8.125V10H6.875V15.625Z" />
    </>
  ),
};

export const snareDrumIcon: LoadedIconFunction = createIcon(
  "snareDrum",
  iconDefinition,
);
