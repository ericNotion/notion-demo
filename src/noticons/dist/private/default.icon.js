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
// src/noticons/src/private/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.1062 2.5H6.89375L2.5 6.89375V13.1062L6.89375 17.5H13.1062L17.5 13.1062V6.89375L13.1062 2.5ZM15.3125 11.5188C15.3125 12.4438 15.0531 13.075 14.3969 13.7281L13.5969 14.5281C12.8125 15.3125 12.0563 15.625 10.9438 15.625H9.05937C6.74687 15.625 5.30937 14.1875 5.30937 11.875V6.875C5.30937 6.49062 5.55 6.25 5.93437 6.25C6.31875 6.25 6.55937 6.49062 6.55937 6.875V9.6875H7.49687V5C7.49687 4.61562 7.7375 4.375 8.12187 4.375C8.50625 4.375 8.74687 4.61562 8.74687 5V9.6875H9.68437V4.375C9.68437 3.99063 9.925 3.75 10.3094 3.75C10.6938 3.75 10.9344 3.99063 10.9344 4.375V9.6875H11.8719V5.625C11.8719 5.24062 12.1125 5 12.4969 5C12.8813 5 13.1219 5.24062 13.1219 5.625V11.875C13.6031 11.875 13.9031 11.575 13.9031 11.0938V10.4688C13.9031 9.375 14.3219 8.75 14.9969 8.75C15.1906 8.75 15.3094 8.86875 15.3094 9.0625V11.5188H15.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var privateIcon = createIcon("private", iconDefinition);
export {
  privateIcon,
  iconDefinition
};
