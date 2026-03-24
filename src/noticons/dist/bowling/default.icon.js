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
// src/noticons/src/bowling/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.7156 5.3125C13.5844 4.1875 13.125 3.72813 13.125 2.65625C13.125 1.58437 13.7094 0.625 14.6875 0.625C15.6656 0.625 16.25 1.54375 16.25 2.65625C16.25 3.76875 15.7937 4.1875 15.6594 5.3125H13.7125H13.7156ZM15.7031 6.5625H13.6719C13.5281 7.18125 13.2 7.81875 12.8625 8.50312C13.425 9.5 13.75 10.65 13.75 11.875C13.75 13.3687 13.2688 14.7531 12.4563 15.8813C12.7812 16.9312 13.125 17.5 13.125 17.5H16.25C16.25 17.5 17.5 15.4438 17.5 11.875C17.5 9.6875 16.0562 8.07188 15.7031 6.5625ZM12.5 11.875C12.5 14.9812 9.98125 17.5 6.875 17.5C3.76875 17.5 1.25 14.9812 1.25 11.875C1.25 8.76875 3.76875 6.25 6.875 6.25C9.98125 6.25 12.5 8.76875 12.5 11.875ZM5.3125 10C5.83125 10 6.25 9.58125 6.25 9.0625C6.25 8.54375 5.83125 8.125 5.3125 8.125C4.79375 8.125 4.375 8.54375 4.375 9.0625C4.375 9.58125 4.79375 10 5.3125 10ZM7.8125 12.1875C7.8125 11.6687 7.39375 11.25 6.875 11.25C6.35625 11.25 5.9375 11.6687 5.9375 12.1875C5.9375 12.7063 6.35625 13.125 6.875 13.125C7.39375 13.125 7.8125 12.7063 7.8125 12.1875ZM9.375 9.0625C9.375 8.54375 8.95625 8.125 8.4375 8.125C7.91875 8.125 7.5 8.54375 7.5 9.0625C7.5 9.58125 7.91875 10 8.4375 10C8.95625 10 9.375 9.58125 9.375 9.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bowlingIcon = createIcon("bowling", iconDefinition);
export {
  iconDefinition,
  bowlingIcon
};
