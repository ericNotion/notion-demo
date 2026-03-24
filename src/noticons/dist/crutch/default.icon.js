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
// src/noticons/src/crutch/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.4406 4.55938C14.1562 3.275 13.75 2.82187 13.75 1.875H12.5C12.5 2.4875 12.6313 2.98125 12.8687 3.43437L7.16563 9.1375C6.575 9.72813 6.25 10.5125 6.25 11.3469V12.4219L3.9875 14.6844H3.64375C3.3125 14.6844 2.99375 14.8156 2.75937 15.05L2.1875 15.6219L4.375 17.8094L4.94688 17.2375C5.18125 17.0031 5.3125 16.6844 5.3125 16.3531V16.0094L7.575 13.7469H8.65C9.48438 13.7469 10.2688 13.4219 10.8594 12.8313L16.5625 7.12812C17.0156 7.36562 17.5094 7.49687 18.1219 7.49687V6.24687C17.175 6.24687 16.725 5.84063 15.4375 4.55625L15.4406 4.55938ZM9.975 11.9531C9.62187 12.3062 9.15 12.5031 8.65 12.5031H7.49687V11.35C7.49687 10.85 7.69063 10.3781 8.04688 10.025L8.90312 9.16875L10.8313 11.0969L9.975 11.9531ZM11.7156 10.2125L9.7875 8.28438L13.6094 4.4625C13.8812 4.76875 14.2 5.0875 14.5563 5.44375C14.9156 5.80312 15.2313 6.11875 15.5375 6.39062L11.7156 10.2125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var crutchIcon = createIcon("crutch", iconDefinition);
export {
  iconDefinition,
  crutchIcon
};
