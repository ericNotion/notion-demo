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
// src/noticons/src/castleJapanese/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.625 11.25C16.875 11.25 17.9469 10.9937 18.75 10.3125L18.2812 9.375C18.2812 9.375 17.7938 9.6875 17.1875 9.6875C16.2219 9.6875 15.625 8.85 15.625 7.5H13.9062V6.24687C15.0875 6.225 16.1062 5.96563 16.875 5.3125L16.4062 4.375C16.4062 4.375 15.9187 4.6875 15.3125 4.6875C14.3469 4.6875 13.75 3.85 13.75 2.5H6.25C6.25 3.85 5.65312 4.6875 4.6875 4.6875C4.08125 4.6875 3.59375 4.375 3.59375 4.375L3.125 5.3125C3.89375 5.96563 4.9125 6.225 6.09375 6.24687V7.5H4.375C4.375 8.85 3.77813 9.6875 2.8125 9.6875C2.20625 9.6875 1.71875 9.375 1.71875 9.375L1.25 10.3125C2.05312 10.9937 3.125 11.25 4.375 11.25V13.125L3.125 16.875H16.875L15.625 13.125V11.25ZM6.25 13.125V11.25H9.0625V13.125H6.25ZM10.9375 13.125V11.25H13.75V13.125H10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var castleJapaneseIcon = createIcon("castleJapanese", iconDefinition);
export {
  iconDefinition,
  castleJapaneseIcon
};
