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
// src/noticons/src/boombox/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15 6.25V5C15 3.45625 14.0437 2.5 12.5 2.5H7.5C5.95625 2.5 5 3.45625 5 5V6.25H1.25V16.25H18.75V6.25H15ZM6.875 5C6.875 4.49063 6.99062 4.375 7.5 4.375H12.5C13.0094 4.375 13.125 4.49063 13.125 5V6.25H6.875V5ZM5 13.4375C3.79063 13.4375 2.8125 12.4594 2.8125 11.25C2.8125 10.0406 3.79063 9.0625 5 9.0625C6.20937 9.0625 7.1875 10.0406 7.1875 11.25C7.1875 12.4594 6.20937 13.4375 5 13.4375ZM11.25 12.5H8.75V10H11.25V12.5ZM15 13.4375C13.7906 13.4375 12.8125 12.4594 12.8125 11.25C12.8125 10.0406 13.7906 9.0625 15 9.0625C16.2094 9.0625 17.1875 10.0406 17.1875 11.25C17.1875 12.4594 16.2094 13.4375 15 13.4375ZM5.9375 11.25C5.9375 11.7688 5.51875 12.1875 5 12.1875C4.48125 12.1875 4.0625 11.7688 4.0625 11.25C4.0625 10.7312 4.48125 10.3125 5 10.3125C5.51875 10.3125 5.9375 10.7312 5.9375 11.25ZM15.9375 11.25C15.9375 11.7688 15.5188 12.1875 15 12.1875C14.4812 12.1875 14.0625 11.7688 14.0625 11.25C14.0625 10.7312 14.4812 10.3125 15 10.3125C15.5188 10.3125 15.9375 10.7312 15.9375 11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var boomboxIcon = createIcon("boombox", iconDefinition);
export {
  iconDefinition,
  boomboxIcon
};
