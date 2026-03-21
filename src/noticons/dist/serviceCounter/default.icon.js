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
// src/noticons/src/serviceCounter/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M4.0625 3.75C4.0625 2.78438 4.65938 2.1875 5.625 2.1875C6.59062 2.1875 7.1875 2.78438 7.1875 3.75C7.1875 4.71563 6.59062 5.3125 5.625 5.3125C4.65938 5.3125 4.0625 4.71563 4.0625 3.75ZM15 5.3125C15.9656 5.3125 16.5625 4.71563 16.5625 3.75C16.5625 2.78438 15.9656 2.1875 15 2.1875C14.0344 2.1875 13.4375 2.78438 13.4375 3.75C13.4375 4.71563 14.0344 5.3125 15 5.3125ZM18.4375 13.75H16.25V17.5H13.75V13.75H11.5625L13.5156 9.84375L12.9656 8.74062L11.7125 11.25H0.625V10H1.2125L2.05 8.32187C2.75938 6.90312 3.64375 6.25 5.62187 6.25C7.6 6.25 8.48438 6.90312 9.19375 8.32187L10.0312 10H10.5813L11.4188 8.32187C12.1281 6.90312 13.0125 6.25 14.9906 6.25C16.9688 6.25 17.8531 6.90312 18.5625 8.32187L19.6781 10.55L18.2812 11.25L17.0281 8.74062L16.4781 9.84375L18.4312 13.75H18.4375ZM4.0625 10V8.4375C3.825 8.4375 3.6875 8.54688 3.56875 8.78438L2.95938 10H4.0625ZM8.29063 10L7.68125 8.78438C7.5625 8.54688 7.425 8.4375 7.1875 8.4375V10H8.29063Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var serviceCounterIcon = createIcon("serviceCounter", iconDefinition);
export {
  serviceCounterIcon,
  iconDefinition
};
