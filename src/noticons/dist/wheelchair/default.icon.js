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
// src/noticons/src/wheelchair/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M14.6875 12.8125L16.3531 15.3125L18.7469 13.7156L18.0531 12.675L16.6969 13.5781L15.3531 11.5625H13.7469V8.125C13.7469 6.96875 13.0281 6.25 11.8719 6.25H6.55939V5C6.55939 3.84375 5.84064 3.125 4.68439 3.125H3.12189V4.375H4.68439C5.06876 4.375 5.30939 4.61563 5.30939 5V9.42812C3.36251 9.72813 1.87189 11.4062 1.87189 13.4375C1.87189 15.6812 3.69064 17.5 5.93439 17.5C8.17814 17.5 9.99689 15.6812 9.99689 13.4375C9.99689 13.225 9.97501 13.0156 9.94376 12.8125H12.4969V13.8594C11.7688 14.1156 11.2469 14.8094 11.2469 15.625C11.2469 16.6594 12.0875 17.5 13.1219 17.5C14.1563 17.5 14.9969 16.6594 14.9969 15.625C14.9969 14.8094 14.475 14.1156 13.7469 13.8594V12.8125H14.6844H14.6875ZM5.93751 16.25C4.38751 16.25 3.12501 14.9875 3.12501 13.4375C3.12501 12.1031 4.06251 10.9812 5.31251 10.6969V10.9375C5.31251 12.0938 6.03126 12.8125 7.18751 12.8125H8.67814C8.72501 13.0125 8.75001 13.2219 8.75001 13.4375C8.75001 14.9875 7.48751 16.25 5.93751 16.25ZM12.5 8.75H6.56251V7.5H11.875C12.2594 7.5 12.5 7.74062 12.5 8.125V8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var wheelchairIcon = createIcon("wheelchair", iconDefinition);
export {
  wheelchairIcon,
  iconDefinition
};
