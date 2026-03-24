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
// src/noticons/src/shower/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M7.8125 12.4469L4.00938 16.25L3.125 15.3656L6.92812 11.5625L7.8125 12.4469ZM5.05312 9.6875L1.25 13.4906L2.13437 14.375L5.9375 10.5719L5.05312 9.6875ZM5 17.2406L5.88438 18.125L9.6875 14.3219L8.80312 13.4375L5 17.2406ZM16.875 1.875V3.125H16.0344C14.9594 3.125 14.1438 3.4625 13.3813 4.22188L11.9781 5.625H8.89687C8.34062 5.625 7.9625 5.78125 7.57187 6.175L6.90938 6.8375L6.00937 5.9375L4.68437 7.2625L12.1469 14.725L13.4719 13.4L12.5344 12.4625L13.1969 11.8C13.5906 11.4062 13.7469 11.0312 13.7469 10.475V7.39375L15.1469 5.99375C15.4375 5.70312 15.6187 5.62813 16.0312 5.62813H16.8719V6.87813H18.7469V1.875H16.8719H16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var showerIcon = createIcon("shower", iconDefinition);
export {
  showerIcon,
  iconDefinition
};
