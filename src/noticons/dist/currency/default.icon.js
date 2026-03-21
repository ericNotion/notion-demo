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
// src/noticons/src/currency/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M4.375 12.5H7.5V14.375H0V3.125H16.25V5H4.375C4.375 6.54375 3.41875 7.5 1.875 7.5V10C3.41875 10 4.375 10.9563 4.375 12.5ZM20 11.875C20 14.9812 17.4813 17.5 14.375 17.5C11.2688 17.5 8.75 14.9812 8.75 11.875C8.75 8.76875 11.2688 6.25 14.375 6.25C17.4813 6.25 20 8.76875 20 11.875ZM15.9375 13.5938V12.5H16.5625C17.1406 12.5 17.5 12.1406 17.5 11.5625C17.5 10.9844 17.1406 10.625 16.5625 10.625C16.5625 10.625 16.5594 10.625 16.5562 10.625C16.5562 10.5719 16.5625 10.5219 16.5625 10.4688C16.5625 9.02187 15.6656 8.125 14.2188 8.125C12.875 8.125 12.0062 8.9 11.8906 10.1688L11.0312 11.0281C10.9594 11.1 10.9281 11.2 10.9438 11.3C10.9594 11.4 11.0219 11.4844 11.1125 11.5281L11.8281 11.8844L11.9656 12.7125C12.0094 12.9719 12.1781 13.1219 12.4094 13.1219C12.4563 13.1219 12.5062 13.1156 12.5594 13.1031L13.4406 12.8844V14.0625L12.7094 14.4281C12.3531 14.6062 12.1906 14.8687 12.1906 15.2656V15.6594C12.8344 16.0312 13.5812 16.25 14.3781 16.25C15.55 16.25 16.6125 15.7875 17.3969 15.0375C17.1812 14.4469 16.6531 13.95 15.9406 13.5938H15.9375ZM8.125 6.25C6.775 6.25 5.9375 7.20625 5.9375 8.75C5.9375 10.0531 6.5375 10.9344 7.53438 11.1781C7.70625 9.48125 8.49375 7.96875 9.66875 6.8625C9.29375 6.46875 8.76875 6.24687 8.125 6.24687V6.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var currencyIcon = createIcon("currency", iconDefinition);
export {
  iconDefinition,
  currencyIcon
};
