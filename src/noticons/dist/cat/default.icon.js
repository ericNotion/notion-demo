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
// src/noticons/src/cat/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.625 5V3.125H14.5313L12.1875 7.5H4.54376L4.01251 6.4375C3.84064 6.09063 3.74689 5.70312 3.74689 5.31875C3.74689 3.9375 4.87189 2.8125 6.25314 2.8125H7.65314V1.25H6.25314C4.00939 1.25 2.18439 3.075 2.18439 5.31875C2.18439 5.94688 2.33439 6.575 2.61251 7.1375L3.12189 8.15312V9.17813C3.12189 9.86875 3.34689 10.3125 3.82501 10.8125C4.19689 11.2 4.37189 11.6938 4.37189 12.3344V12.5L3.12189 14.375L3.28126 14.85C3.62501 15.8781 4.02501 16.525 4.79064 17.2938L4.99689 17.5H6.87189V16.5625C6.87189 15.9844 6.51251 15.625 5.93439 15.625H5.38751L4.99689 14.8438L8.12189 12.5H11.2469V15L11.3375 15.45C11.5 16.2625 11.7781 16.7812 12.3625 17.3656L12.4969 17.5H14.3719V16.5625C14.3719 15.9844 14.0125 15.625 13.4344 15.625H13.1219V12.5L14.9594 10.6625C15.4344 10.1875 15.6219 9.73125 15.6219 9.0625C15.6219 8.48438 15.9813 8.125 16.5594 8.125H17.4969L18.1219 6.875L15.6219 5H15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var catIcon = createIcon("cat", iconDefinition);
export {
  iconDefinition,
  catIcon
};
