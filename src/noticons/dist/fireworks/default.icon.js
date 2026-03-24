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
// src/noticons/src/fireworks/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M6.25 10.625H1.875V9.375H6.25V10.625ZM4.9 6.33438L3.81875 5.70938L3.19375 6.79062L4.275 7.41562L4.9 6.33438ZM5.39688 16.725L6.47812 17.35L8.66562 13.5625L7.58438 12.9375L5.39688 16.725ZM8.66562 6.44063L6.47812 2.65312L5.39688 3.27812L7.58438 7.06563L8.66562 6.44063ZM16.8062 6.79062L16.1812 5.70938L15.1 6.33438L15.725 7.41562L16.8062 6.79062ZM14.6031 3.275L13.5219 2.65L11.3344 6.4375L12.4156 7.0625L14.6031 3.275ZM5.0875 12.1125L5.7125 13.1938L8.69062 11.475L8.06562 10.3937L5.0875 12.1125ZM14.9125 7.88125L14.2875 6.8L11.3094 8.51875L11.9344 9.6L14.9125 7.88125ZM3.19375 13.2094L3.81875 14.2906L4.9 13.6656L4.275 12.5844L3.19375 13.2094ZM15.1031 13.6656L16.1844 14.2906L16.8094 13.2094L15.7281 12.5844L15.1031 13.6656ZM11.3156 11.4781L14.2938 13.1969L14.9188 12.1156L11.9406 10.3969L11.3156 11.4781ZM13.7531 9.375V10.625H18.1281V9.375H13.7531ZM5.09063 7.88437L8.06875 9.60312L8.69375 8.52188L5.71563 6.80313L5.09063 7.88437ZM11.3375 13.5594L13.525 17.3469L14.6063 16.7219L12.4188 12.9344L11.3375 13.5594ZM9.37813 17.5H10.6281V16.25H9.37813V17.5ZM9.37813 3.75H10.6281V2.5H9.37813V3.75ZM9.37813 15.3125H10.6281V11.875H9.37813V15.3125ZM9.37813 8.125H10.6281V4.6875H9.37813V8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fireworksIcon = createIcon("fireworks", iconDefinition);
export {
  iconDefinition,
  fireworksIcon
};
