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
      <path d="M0.625 7.1875V9.0625H1.875L2.22813 11.1844C2.5375 13.0406 3.74375 14.0625 5.625 14.0625C7.50625 14.0625 8.7125 13.0406 9.02188 11.1844L9.27188 9.67812C9.3375 9.28125 9.59688 9.0625 10 9.0625C10.4031 9.0625 10.6625 9.28125 10.7281 9.67812L10.9781 11.1844C11.2875 13.0406 12.4937 14.0625 14.375 14.0625C16.2563 14.0625 17.4625 13.0406 17.7719 11.1844L18.125 9.0625H19.375V7.1875H0.625ZM5.6 12.1875H4.35L5.9125 9.0625H7.1625L5.6 12.1875ZM14.35 12.1875H13.1L14.6625 9.0625H15.9125L14.35 12.1875Z" />
    </>
  ),
};

export const sunglassesIcon: LoadedIconFunction = createIcon(
  "sunglasses",
  iconDefinition,
);
