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
// src/noticons/src/seed/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M14.9719 2.5C14.5781 2.5 14.1938 2.59063 13.8406 2.76563L6.7375 6.31875C6 6.6875 5.32813 7.17188 4.74375 7.75625C3.30625 9.19375 2.49688 11.1437 2.49688 13.1781V15.4125L4.5875 17.5031H6.82188C8.85625 17.5031 10.8063 16.6969 12.2438 15.2563C12.825 14.675 13.3125 14 13.6813 13.2625L17.2344 6.15937C17.4094 5.80937 17.5 5.42188 17.5 5.02813C17.5 3.46875 16.5312 2.5 14.9719 2.5ZM8.13438 9.11562C7.69688 9.33437 7.3 9.62187 6.95625 9.96562C6.09688 10.8219 5.625 11.9625 5.625 13.1781H4.375C4.375 11.6312 4.97813 10.1781 6.07188 9.08437C6.5125 8.64375 7.01875 8.27813 7.575 8L11.9406 5.81875L12.5 6.9375L8.13438 9.11875V9.11562Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var seedIcon = createIcon("seed", iconDefinition);
export {
  seedIcon,
  iconDefinition
};
