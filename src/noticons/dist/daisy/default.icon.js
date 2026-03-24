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
// src/noticons/src/daisy/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M14.9312 12.5C13.075 12.5 11.5656 13.5625 10.9375 15.1406V11.5531C11.2719 11.7438 11.6469 11.8406 12.025 11.8406C13.6156 11.8406 14.2094 10.425 14.2094 9.65312C14.2094 9.48438 14.2031 8.64062 13.4375 7.99062C14.7156 7.89062 15.4562 6.81563 15.4562 5.8125C15.4562 5.5875 15.4219 5.35938 15.35 5.1375C15.05 4.2125 14.1906 3.625 13.2687 3.625C12.7219 3.625 12.3312 3.825 12.125 3.95C12.1656 3.78438 12.1875 3.6125 12.1875 3.4375C12.1875 2.22813 11.2094 1.25 10 1.25C8.79063 1.25 7.8125 2.22813 7.8125 3.4375C7.8125 3.61562 7.83438 3.7875 7.875 3.95C7.66875 3.82188 7.275 3.625 6.73125 3.625C5.80938 3.625 4.95313 4.2125 4.65 5.1375C4.57813 5.3625 4.54375 5.59063 4.54375 5.8125C4.54375 6.81875 5.29375 7.89062 6.5625 7.99062C5.8 8.64062 5.79063 9.48438 5.79063 9.65312C5.79063 10.4125 6.38125 11.8406 7.975 11.8406C8.35313 11.8406 8.73125 11.7438 9.0625 11.5531V15.1406C8.4375 13.5625 6.925 12.5 5.06875 12.5L4.375 13.1938L8.68125 17.5H11.3219L15.6281 13.1938L14.9344 12.5H14.9312ZM10 8.125C9.30937 8.125 8.75 7.56563 8.75 6.875C8.75 6.18437 9.30937 5.625 10 5.625C10.6906 5.625 11.25 6.18437 11.25 6.875C11.25 7.56563 10.6906 8.125 10 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var daisyIcon = createIcon("daisy", iconDefinition);
export {
  iconDefinition,
  daisyIcon
};
