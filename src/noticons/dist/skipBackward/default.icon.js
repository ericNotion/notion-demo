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
// src/noticons/src/skipBackward/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M7.09063 5.84063L6.36875 6.5625H9.06563V8.4375H3.125V2.5H5V5.27812L5.7625 4.51562C7.10625 3.17187 8.86562 2.50313 10.625 2.50313C14.4219 2.50313 17.5 5.58125 17.5 9.37813H15.625C15.625 6.61562 13.3875 4.37813 10.625 4.37813C9.34688 4.37813 8.06563 4.86563 7.09063 5.84375V5.84063ZM4.375 11.25C2.65 11.25 1.25 12.65 1.25 14.375C1.25 16.1 2.65 17.5 4.375 17.5C6.1 17.5 7.5 16.1 7.5 14.375C7.5 12.65 6.1 11.25 4.375 11.25ZM18.75 14.375C18.75 16.1 17.35 17.5 15.625 17.5C13.9 17.5 12.5 16.1 12.5 14.375C12.5 12.65 13.9 11.25 15.625 11.25C17.35 11.25 18.75 12.65 18.75 14.375ZM16.875 14.375C16.875 13.6844 16.3156 13.125 15.625 13.125C14.9344 13.125 14.375 13.6844 14.375 14.375C14.375 15.0656 14.9344 15.625 15.625 15.625C16.3156 15.625 16.875 15.0656 16.875 14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var skipBackwardIcon = createIcon("skipBackward", iconDefinition);
export {
  skipBackwardIcon,
  iconDefinition
};
