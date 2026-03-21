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
// src/noticons/src/trainHighSpeed/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M5.50625 12.5969L8.225 13.9563C8.775 14.2312 9.38438 14.375 10 14.375C10.6156 14.375 11.225 14.2312 11.775 13.9563L14.4938 12.5969C15.7625 11.9625 16.5625 10.6656 16.5625 9.25C16.5625 9.25 16.5312 8.625 16.4406 8.26562L15 2.5H5L3.55938 8.26562C3.47813 8.5875 3.4375 8.91875 3.4375 9.25C3.4375 10.6687 4.2375 11.9625 5.50625 12.5969ZM6.875 11.875C6.35625 11.875 5.9375 11.4563 5.9375 10.9375C5.9375 10.4187 6.35625 10 6.875 10C7.39375 10 7.8125 10.4187 7.8125 10.9375C7.8125 11.4563 7.39375 11.875 6.875 11.875ZM13.125 11.875C12.6062 11.875 12.1875 11.4563 12.1875 10.9375C12.1875 10.4187 12.6062 10 13.125 10C13.6438 10 14.0625 10.4187 14.0625 10.9375C14.0625 11.4563 13.6438 11.875 13.125 11.875ZM6.4625 4.375H13.5344L14.3906 7.80312L9.99687 10L5.60313 7.80312L6.45937 4.375H6.4625ZM14.375 15.625L15.9375 18.75H13.8281L13.2031 17.5H6.79688L6.17188 18.75H4.0625L5.625 15.625H14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var trainHighSpeedIcon = createIcon("trainHighSpeed", iconDefinition);
export {
  trainHighSpeedIcon,
  iconDefinition
};
