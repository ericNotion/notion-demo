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
// src/noticons/src/hand/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.9375 8.4375V11.6187C15.9375 13.1406 15.4969 14.1719 14.4 15.225L13.3 16.2812C12.3906 17.1562 11.5312 17.5 10.2687 17.5H8.74687C6.04687 17.5 4.37187 15.825 4.37187 13.125V5.78125C4.37187 5.3 4.67187 5 5.15312 5C5.63437 5 5.93437 5.3 5.93437 5.78125V9.6875H6.87187V3.90625C6.87187 3.425 7.17187 3.125 7.65312 3.125C8.13437 3.125 8.43437 3.425 8.43437 3.90625V9.6875H9.37187V3.28125C9.37187 2.8 9.67187 2.5 10.1531 2.5C10.6344 2.5 10.9344 2.8 10.9344 3.28125V9.6875H11.8719V4.53125C11.8719 4.05 12.1719 3.75 12.6531 3.75C13.1344 3.75 13.4344 4.05 13.4344 4.53125V11.875C13.9156 11.875 14.2156 11.575 14.2156 11.0938V10.3125C14.2156 8.92188 14.7531 8.125 15.6219 8.125C15.825 8.125 15.9344 8.23438 15.9344 8.4375H15.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var handIcon = createIcon("hand", iconDefinition);
export {
  iconDefinition,
  handIcon
};
