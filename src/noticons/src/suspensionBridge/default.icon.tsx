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
      <path d="M20 11.25C20 11.25 16.875 8.125 15.625 3.125H13.75C12.85 6.725 10.9781 9.35313 10 10.5438C9.02188 9.35313 7.15 6.72812 6.25 3.125H4.375C3.125 8.125 0 11.25 0 11.25V13.125H4.375V16.875H6.25V13.125H13.75V16.875H15.625V13.125H20V11.25ZM2.45625 11.25C3.01562 10.525 3.70625 9.5125 4.375 8.2625V11.25H2.45625ZM6.25 11.25V8.2625C6.91563 9.50938 7.60625 10.5188 8.16875 11.25H6.25ZM11.8313 11.25C12.3906 10.5219 13.0844 9.50938 13.75 8.2625V11.25H11.8313ZM15.625 11.25V8.2625C16.2906 9.5125 16.9844 10.525 17.5438 11.25H15.625Z" />
    </>
  ),
};

export const suspensionBridgeIcon: LoadedIconFunction = createIcon(
  "suspensionBridge",
  iconDefinition,
);
