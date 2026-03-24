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
// src/noticons/src/calculator/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.3125 1.875H4.6875C3.91562 1.875 3.4375 2.35312 3.4375 3.125V16.875C3.4375 17.6469 3.91562 18.125 4.6875 18.125H15.3125C16.0844 18.125 16.5625 17.6469 16.5625 16.875V3.125C16.5625 2.35312 16.0844 1.875 15.3125 1.875ZM7.1875 15.9375H5.3125V14.375H7.1875V15.9375ZM7.1875 12.5H5.3125V10.9375H7.1875V12.5ZM7.1875 9.0625H5.3125V7.5H7.1875V9.0625ZM14.6875 15.9375H9.0625V14.375H14.6875V15.9375ZM10.9375 10.9375V12.5H9.0625V10.9375H10.9375ZM9.0625 9.0625V7.5H10.9375V9.0625H9.0625ZM14.6875 12.5H12.8125V10.9375H14.6875V12.5ZM14.6875 9.0625H12.8125V7.5H14.6875V9.0625ZM14.6875 5.625H5.3125V3.75H14.6875V5.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var calculatorIcon = createIcon("calculator", iconDefinition);
export {
  iconDefinition,
  calculatorIcon
};
