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
// src/noticons/src/candy/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M19.375 7.1875V5.78125C17.3844 5.78125 16.0219 6.71875 15.1344 7.7125C14.2563 5.74688 12.2906 4.375 10 4.375C7.70937 4.375 5.74062 5.74688 4.86562 7.7125C3.97812 6.72188 2.61562 5.78125 0.625 5.78125V7.1875C1.20312 7.1875 1.5625 7.54688 1.5625 8.125C1.5625 8.70312 1.20312 9.0625 0.625 9.0625V10.9375C1.20312 10.9375 1.5625 11.2969 1.5625 11.875C1.5625 12.4531 1.20312 12.8125 0.625 12.8125V14.2188C2.61562 14.2188 3.97812 13.2812 4.86562 12.2875C5.74375 14.2531 7.70937 15.625 10 15.625C12.2906 15.625 14.2594 14.2531 15.1344 12.2875C16.0219 13.2781 17.3844 14.2188 19.375 14.2188V12.8125C18.7969 12.8125 18.4375 12.4531 18.4375 11.875C18.4375 11.2969 18.7969 10.9375 19.375 10.9375V9.0625C18.7969 9.0625 18.4375 8.70312 18.4375 8.125C18.4375 7.54688 18.7969 7.1875 19.375 7.1875ZM11.875 12.5C11.875 11.4219 11.3125 10.7656 10.3219 10.65C10.1562 10.8813 9.39062 11.9438 7.95937 11.9438C7.40625 11.9438 6.83125 11.7781 6.27187 11.4563L6.89687 10.375C7.2625 10.5875 7.625 10.6938 7.9625 10.6938C8.79688 10.6938 9.25938 9.9875 9.27812 9.95938C9.07188 9.50313 8.96875 9.05 8.96875 8.61562C8.96875 7.59062 9.53125 6.6625 10.6031 6.04375L11.2281 7.125C10.5656 7.50625 10.225 8.03125 10.225 8.62813C10.225 8.87188 10.2812 9.12812 10.3969 9.39375C12.0688 9.55312 13.125 10.7375 13.125 12.4969H11.875V12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var candyIcon = createIcon("candy", iconDefinition);
export {
  iconDefinition,
  candyIcon
};
