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
// src/noticons/src/colorPalette/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.0625 6.6C15.6625 4.525 13.025 3.125 10 3.125C5.5125 3.125 1.875 6.20312 1.875 10C1.875 13.7969 5.5125 16.875 10 16.875C12.275 16.875 14.3313 16.0844 15.8031 14.8094C16.0906 14.5625 16.25 14.1969 16.25 13.8188C16.25 13.0906 15.6594 12.5 14.9312 12.5C14.2031 12.5 13.75 12.1406 13.75 11.5625C13.75 10.9844 14.1656 10.625 14.9188 10.625C16.3438 10.625 17.5 9.46875 17.5 8.04375C17.5 7.53125 17.35 7.025 17.0625 6.6ZM5.625 11.875C4.93438 11.875 4.375 11.3156 4.375 10.625C4.375 9.93437 4.93438 9.375 5.625 9.375C6.31563 9.375 6.875 9.93437 6.875 10.625C6.875 11.3156 6.31563 11.875 5.625 11.875ZM6.875 6.5625C6.875 5.87188 7.43437 5.3125 8.125 5.3125C8.81563 5.3125 9.375 5.87188 9.375 6.5625C9.375 7.25313 8.81563 7.8125 8.125 7.8125C7.43437 7.8125 6.875 7.25313 6.875 6.5625ZM9.0625 15C8.37187 15 7.8125 14.4406 7.8125 13.75C7.8125 13.0594 8.37187 12.5 9.0625 12.5C9.75313 12.5 10.3125 13.0594 10.3125 13.75C10.3125 14.4406 9.75313 15 9.0625 15ZM12.8125 8.4375C12.1219 8.4375 11.5625 7.87813 11.5625 7.1875C11.5625 6.49688 12.1219 5.9375 12.8125 5.9375C13.5031 5.9375 14.0625 6.49688 14.0625 7.1875C14.0625 7.87813 13.5031 8.4375 12.8125 8.4375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var colorPaletteIcon = createIcon("colorPalette", iconDefinition);
export {
  iconDefinition,
  colorPaletteIcon
};
