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
// src/noticons/src/cardSpade/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.125 2.5H6.875C5.33125 2.5 4.375 3.45625 4.375 5V15C4.375 16.5437 5.33125 17.5 6.875 17.5H13.125C14.6687 17.5 15.625 16.5437 15.625 15V5C15.625 3.45625 14.6687 2.5 13.125 2.5ZM11.875 12.1875C11.3156 12.1875 10.8125 11.9406 10.4688 11.55V11.7281C10.4688 12.2031 10.7375 12.6344 11.1594 12.8469L11.7188 13.125V13.5938H8.28125V13.125L8.84063 12.8469C9.26563 12.6344 9.53125 12.2031 9.53125 11.7281V11.55C9.1875 11.9406 8.68437 12.1875 8.125 12.1875C7.09063 12.1875 6.25 11.3469 6.25 10.3125C6.25 8.4 8.59375 6.875 9.6875 5.78125H10.3125C11.4062 6.875 13.75 8.4 13.75 10.3125C13.75 11.3469 12.9094 12.1875 11.875 12.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cardSpadeIcon = createIcon("cardSpade", iconDefinition);
export {
  iconDefinition,
  cardSpadeIcon
};
