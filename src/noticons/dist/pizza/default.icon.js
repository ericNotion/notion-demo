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
// src/noticons/src/pizza/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M7.15938 1.875C6.19063 1.875 5.625 2.94063 5.625 3.81562C5.625 4.15625 5.72812 4.45625 5.92812 4.71875L1.875 16.875L3.125 18.125L15.2812 14.0719C15.5438 14.2719 15.8438 14.375 16.1844 14.375C16.9406 14.375 18.125 13.8938 18.125 12.8406C18.125 10.0031 10.7781 1.875 7.15938 1.875ZM5.9375 15.3125C5.24688 15.3125 4.6875 14.7531 4.6875 14.0625C4.6875 13.3719 5.24688 12.8125 5.9375 12.8125C6.62813 12.8125 7.1875 13.3719 7.1875 14.0625C7.1875 14.7531 6.62813 15.3125 5.9375 15.3125ZM8.125 9.375C7.43437 9.375 6.875 8.81563 6.875 8.125C6.875 7.43437 7.43437 6.875 8.125 6.875C8.81563 6.875 9.375 7.43437 9.375 8.125C9.375 8.81563 8.81563 9.375 8.125 9.375ZM10.625 13.75C9.93437 13.75 9.375 13.1906 9.375 12.5C9.375 11.8094 9.93437 11.25 10.625 11.25C11.3156 11.25 11.875 11.8094 11.875 12.5C11.875 13.1906 11.3156 13.75 10.625 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pizzaIcon = createIcon("pizza", iconDefinition);
export {
  pizzaIcon,
  iconDefinition
};
