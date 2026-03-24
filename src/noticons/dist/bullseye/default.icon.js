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
// src/noticons/src/bullseye/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.125 3.75H16.25V1.875H15L13.5063 3.36875C12.4594 2.81562 11.2688 2.5 10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 8.73438 17.1844 7.54063 16.6313 6.49375L18.125 5V3.75ZM12.5 10C12.5 11.3813 11.3813 12.5 10 12.5C8.61875 12.5 7.5 11.3813 7.5 10C7.5 8.61875 8.61875 7.5 10 7.5C10.4625 7.5 10.8969 7.62813 11.2688 7.84688L10.3219 8.79375C10.2187 8.76562 10.1125 8.74687 10.0031 8.74687C9.3125 8.74687 8.75313 9.30625 8.75313 9.99687C8.75313 10.6875 9.3125 11.2469 10.0031 11.2469C10.6937 11.2469 11.2531 10.6875 11.2531 9.99687C11.2531 9.88437 11.2344 9.78125 11.2063 9.67812L12.1531 8.73125C12.3719 9.10313 12.5 9.53438 12.5 10ZM10 15.625C6.89375 15.625 4.375 13.1062 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375C10.9 4.375 11.7469 4.59063 12.5 4.96563V6.4125C11.7906 5.91875 10.9312 5.625 10 5.625C7.58437 5.625 5.625 7.58437 5.625 10C5.625 12.4156 7.58437 14.375 10 14.375C12.4156 14.375 14.375 12.4156 14.375 10C14.375 9.06875 14.0813 8.20937 13.5875 7.5H15.0344C15.4094 8.25313 15.625 9.1 15.625 10C15.625 13.1062 13.1062 15.625 10 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bullseyeIcon = createIcon("bullseye", iconDefinition);
export {
  iconDefinition,
  bullseyeIcon
};
