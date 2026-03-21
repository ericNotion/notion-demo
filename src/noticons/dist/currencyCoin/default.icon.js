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
// src/noticons/src/currencyCoin/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M2.81563 6.5625L2.55313 7.36875L4.4125 8.72188L3.70312 10.9094L4.39062 11.4094L6.25 10.0563L6.99687 10.5969C6.91875 11.0094 6.875 11.4375 6.875 11.875C6.875 12.5 6.95938 13.1031 7.11563 13.6781C6.83438 13.7219 6.54688 13.75 6.25 13.75C3.14375 13.75 0.625 11.2312 0.625 8.125C0.625 5.01875 3.14375 2.5 6.25 2.5C8.40312 2.5 10.2688 3.70937 11.2156 5.48437C10.5469 5.75 9.93125 6.1125 9.3875 6.5625H7.3875L6.67813 4.375H5.82812L5.11875 6.5625H2.81875H2.81563ZM19.375 11.875C19.375 14.9812 16.8563 17.5 13.75 17.5C10.6438 17.5 8.125 14.9812 8.125 11.875C8.125 8.76875 10.6438 6.25 13.75 6.25C16.8563 6.25 19.375 8.76875 19.375 11.875ZM15.3125 13.5938V12.5H15.9375C16.5156 12.5 16.875 12.1406 16.875 11.5625C16.875 10.9844 16.5156 10.625 15.9375 10.625C15.9375 10.625 15.9344 10.625 15.9312 10.625C15.9312 10.5719 15.9375 10.5219 15.9375 10.4688C15.9375 9.02187 15.0406 8.125 13.5938 8.125C12.25 8.125 11.3812 8.9 11.2656 10.1688L10.4062 11.0281C10.3344 11.1 10.3031 11.2 10.3188 11.3C10.3344 11.4 10.3969 11.4844 10.4875 11.5281L11.2031 11.8844L11.3406 12.7125C11.3844 12.9719 11.5531 13.1219 11.7844 13.1219C11.8313 13.1219 11.8812 13.1156 11.9344 13.1031L12.8156 12.8844V14.0625L12.0844 14.4281C11.7281 14.6062 11.5656 14.8687 11.5656 15.2656V15.6594C12.2094 16.0312 12.9562 16.25 13.7531 16.25C14.925 16.25 15.9875 15.7875 16.7719 15.0375C16.5562 14.4469 16.0281 13.95 15.3156 13.5938H15.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var currencyCoinIcon = createIcon("currencyCoin", iconDefinition);
export {
  iconDefinition,
  currencyCoinIcon
};
