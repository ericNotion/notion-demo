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
// src/noticons/src/brightnessHigh/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M4.91875 6.24375L3.15 4.475L4.475 3.15L6.24375 4.91875L4.91875 6.24375ZM3.75 9.0625H1.25V10.9375H3.75V9.0625ZM16.85 4.475L15.525 3.15L13.7563 4.91875L15.0812 6.24375L16.85 4.475ZM3.15 15.525L4.475 16.85L6.24375 15.0812L4.91875 13.7563L3.15 15.525ZM10.9375 1.25H9.0625V3.75H10.9375V1.25ZM9.0625 18.75H10.9375V16.25H9.0625V18.75ZM13.7563 15.0812L15.525 16.85L16.85 15.525L15.0812 13.7563L13.7563 15.0812ZM16.25 9.0625V10.9375H18.75V9.0625H16.25ZM15 10C15 12.7625 12.7625 15 10 15C7.2375 15 5 12.7625 5 10C5 7.2375 7.2375 5 10 5C12.7625 5 15 7.2375 15 10ZM13.125 10C13.125 8.275 11.725 6.875 10 6.875C8.275 6.875 6.875 8.275 6.875 10C6.875 11.725 8.275 13.125 10 13.125C11.725 13.125 13.125 11.725 13.125 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var brightnessHighIcon = createIcon("brightnessHigh", iconDefinition);
export {
  iconDefinition,
  brightnessHighIcon
};
