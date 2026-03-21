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
// src/noticons/src/paifang/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M20 11.5625L19.5312 10.625C19.5312 10.625 19.0438 10.9375 18.4375 10.9375C17.4719 10.9375 16.875 10.1 16.875 8.75H13.75V6.875C15 6.875 16.0719 6.61875 16.875 5.9375L16.4062 5C16.4062 5 15.9187 5.3125 15.3125 5.3125C14.3469 5.3125 13.75 4.475 13.75 3.125H6.25C6.25 4.475 5.65312 5.3125 4.6875 5.3125C4.08125 5.3125 3.59375 5 3.59375 5L3.125 5.9375C3.92812 6.61875 5 6.875 6.25 6.875V8.75H3.125C3.125 10.1 2.52813 10.9375 1.5625 10.9375C0.95625 10.9375 0.46875 10.625 0.46875 10.625L0 11.5625C0.803125 12.2437 1.875 12.5 3.125 12.5V16.875H5V12.5H6.25V16.875H8.125V12.5H11.875V16.875H13.75V12.5H15V16.875H16.875V12.5C18.125 12.5 19.1969 12.2437 20 11.5625ZM8.125 8.75V6.875H11.875V8.75H8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var paifangIcon = createIcon("paifang", iconDefinition);
export {
  paifangIcon,
  iconDefinition
};
