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
// src/noticons/src/suit/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.25 14.6875L19.0625 13.75L15.7406 3.78125C15.4562 2.925 14.8625 2.5 13.9625 2.5H13.125C13.125 2.5 12.4062 1.25 10 1.25C7.59375 1.25 6.875 2.5 6.875 2.5H6.0375C5.13438 2.5 4.54375 2.92813 4.25938 3.78125L0.9375 13.75L3.75 14.6875L5.625 9.0625L6.06563 12.5781L4.6875 16.7094L6.5625 17.3344C8.025 17.8219 9.2375 17.2156 9.725 15.7531L10 14.9281L10.275 15.7531C10.7625 17.2156 11.975 17.8219 13.4375 17.3344L15.3125 16.7094L13.9344 12.5781L14.375 9.0625L16.25 14.6875ZM10 3.125C10.9844 3.125 11.5625 3.49688 11.875 3.80625V3.96875C11.875 4.26875 11.8406 4.475 11.7469 4.75937L10 10L8.25313 4.75937C8.15937 4.475 8.125 4.26875 8.125 3.96875V3.80625C8.4375 3.49688 9.01562 3.125 10 3.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var suitIcon = createIcon("suit", iconDefinition);
export {
  suitIcon,
  iconDefinition
};
