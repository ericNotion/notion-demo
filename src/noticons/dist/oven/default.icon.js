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
// src/noticons/src/oven/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M2.5 17.5H17.5V8.75H2.5V17.5ZM5.625 11.875C5.625 11.1031 6.10313 10.625 6.875 10.625H13.125C13.8969 10.625 14.375 11.1031 14.375 11.875V13.125C14.375 13.8969 13.8969 14.375 13.125 14.375H6.875C6.10313 14.375 5.625 13.8969 5.625 13.125V11.875ZM2.5 2.5V7.5H17.5V2.5H2.5ZM5 5.9375C4.48125 5.9375 4.0625 5.51875 4.0625 5C4.0625 4.48125 4.48125 4.0625 5 4.0625C5.51875 4.0625 5.9375 4.48125 5.9375 5C5.9375 5.51875 5.51875 5.9375 5 5.9375ZM11.875 5.9375H8.125V4.0625H11.875V5.9375ZM15 5.9375C14.4812 5.9375 14.0625 5.51875 14.0625 5C14.0625 4.48125 14.4812 4.0625 15 4.0625C15.5188 4.0625 15.9375 4.48125 15.9375 5C15.9375 5.51875 15.5188 5.9375 15 5.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var ovenIcon = createIcon("oven", iconDefinition);
export {
  ovenIcon,
  iconDefinition
};
