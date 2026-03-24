// src/nds-icons/SvgIcon.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
function SvgIcon({
  children,
  viewBox,
  style,
  className,
  label
}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...label !== undefined ? { "aria-label": label } : { "aria-hidden": true },
    role: "graphics-symbol",
    viewBox,
    style: {
      width: "100%",
      height: "100%",
      display: "block",
      fill: "inherit",
      flexShrink: 0,
      ...style
    },
    className,
    children
  }, undefined, false, undefined, this);
}

// src/nds-icons/iconUtils.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var iconGroupVariantNames = [
  "fillSmall",
  "small",
  "fill",
  "default"
];
var logoVariantNames = ["default", "darkMode"];
var deprecatedIconGroupVariantNames = [
  "micro",
  "mini",
  "small",
  "default",
  "large",
  "extraLarge",
  "max"
];
var iconVariantNames = [
  ...iconGroupVariantNames,
  ...deprecatedIconGroupVariantNames,
  ...logoVariantNames
];
var ICON_SIZE = {
  xxs: 12,
  xs: 14,
  sm: 16,
  default: 20,
  lg: 22,
  xl: 32
};
var ICON_SIZE_FOR_VARIANT = {
  default: ICON_SIZE.default,
  small: ICON_SIZE.sm,
  fill: ICON_SIZE.default,
  fillSmall: ICON_SIZE.sm,
  darkMode: ICON_SIZE.default,
  micro: 14,
  mini: 14,
  large: 24,
  max: 28,
  extraLarge: 36
};
function createIcon(name, iconDefinition) {
  const { viewBox, svg } = iconDefinition;
  const finalViewBox = viewBox ?? `0 0 ${ICON_SIZE.default} ${ICON_SIZE.default}`;
  const iconFunction = (style, className) => {
    const finalClassName = className ? `${name} ${className}` : name;
    return /* @__PURE__ */ jsxDEV2(SvgIcon, {
      viewBox: finalViewBox,
      className: finalClassName,
      style,
      children: svg
    }, undefined, false, undefined, this);
  };
  return Object.assign(iconFunction, {
    __iconDefinition: { ...iconDefinition, viewBox: finalViewBox }
  });
}

// src/nds-icons/Icon.tsx
"use client";
// src/noticons/src/judicialScales/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.75 6.25L17.425 4.925C17.425 4.925 16.4438 5.9375 15 5.9375C13.2781 5.9375 12.4281 5.21563 11.25 4.86875V2.5H8.75V4.86875C7.56875 5.21563 6.71875 5.9375 5 5.9375C3.55625 5.9375 2.575 4.925 2.575 4.925L1.25 6.25C1.25 6.25 2.4875 7.52188 4.375 7.76875V8.75L2.5 12.5V13.75H7.5V12.5L5.625 8.75V7.78438C7.0625 7.67188 7.95625 7.18438 8.75 6.85938V15.6219H5V17.4969H15V15.6219H11.25V6.85938C12.05 7.18438 12.9563 7.66563 14.375 7.78125V8.74687L12.5 12.4969V13.7469H17.5V12.4969L15.625 8.74687V7.76562C17.5125 7.51875 18.75 6.24687 18.75 6.24687V6.25ZM6.10313 12.5H3.89688L5 10.2937L6.10313 12.5ZM16.1031 12.5H13.8969L15 10.2937L16.1031 12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var judicialScalesIcon = createIcon("judicialScales", iconDefinition);
export {
  judicialScalesIcon,
  iconDefinition
};
