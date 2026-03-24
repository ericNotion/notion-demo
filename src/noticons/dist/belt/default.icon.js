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
// src/noticons/src/belt/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M0.625 13.125H6.25V6.875H0.625V13.125ZM3.4375 9.0625C3.95625 9.0625 4.375 9.48125 4.375 10C4.375 10.5188 3.95625 10.9375 3.4375 10.9375C2.91875 10.9375 2.5 10.5188 2.5 10C2.5 9.48125 2.91875 9.0625 3.4375 9.0625ZM10.625 14.375H16.25V16.25H10.625C8.69687 16.25 7.5 15.0531 7.5 13.125V6.875C7.5 4.94687 8.69687 3.75 10.625 3.75H16.25V5.625H10.625C9.85312 5.625 9.375 6.10313 9.375 6.875V13.125C9.375 13.8969 9.85312 14.375 10.625 14.375ZM18.4375 6.875H10.625V9.375H12.5V10.625H10.625V13.125H18.4375L20 10L18.4375 6.875ZM15.3125 10.9375C14.7937 10.9375 14.375 10.5188 14.375 10C14.375 9.48125 14.7937 9.0625 15.3125 9.0625C15.8313 9.0625 16.25 9.48125 16.25 10C16.25 10.5188 15.8313 10.9375 15.3125 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var beltIcon = createIcon("belt", iconDefinition);
export {
  iconDefinition,
  beltIcon
};
