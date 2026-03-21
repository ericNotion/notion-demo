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
// src/noticons/src/science/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.2719 10C16.9656 8.45312 17.9344 6.87187 17.3063 5.78125C16.6781 4.69062 14.8219 4.74062 12.6344 5.43437C12.1438 3.19375 11.2563 1.5625 9.99687 1.5625C8.7375 1.5625 7.85312 3.19375 7.35938 5.43437C5.175 4.74062 3.31875 4.69062 2.6875 5.78125C2.05938 6.87187 3.02813 8.45312 4.72187 10C3.02813 11.5469 2.05938 13.1281 2.6875 14.2188C3.31563 15.3094 5.17187 15.2594 7.35938 14.5656C7.85 16.8063 8.7375 18.4375 9.99687 18.4375C11.2563 18.4375 12.1406 16.8063 12.6344 14.5656C14.8188 15.2594 16.675 15.3094 17.3063 14.2188C17.9344 13.1281 16.9656 11.5469 15.2719 10ZM15.6844 6.71875C15.9656 7.20625 15.275 8.07812 14.1219 9.0375C13.775 8.76875 13.4062 8.50625 13.0312 8.25C13 7.79688 12.9531 7.34688 12.8969 6.9125C14.3063 6.39375 15.4062 6.23125 15.6875 6.71875H15.6844ZM10.7656 11.325C10.5125 11.4719 10.2562 11.6125 10 11.75C9.74375 11.6125 9.4875 11.4719 9.23438 11.325C8.98125 11.1781 8.73125 11.0281 8.48125 10.875C8.47187 10.5844 8.46875 10.2906 8.46875 10C8.46875 9.70938 8.47187 9.41563 8.48125 9.125C8.72812 8.97188 8.98125 8.82188 9.23438 8.675C9.4875 8.52813 9.74375 8.3875 10 8.25C10.2562 8.3875 10.5125 8.52813 10.7656 8.675C11.0188 8.82188 11.2688 8.97188 11.5188 9.125C11.5281 9.41563 11.5312 9.70938 11.5312 10C11.5312 10.2906 11.5281 10.5844 11.5188 10.875C11.2719 11.0281 11.0188 11.1781 10.7656 11.325ZM10 3.4375C10.5625 3.4375 10.9719 4.46875 11.2281 5.95C10.8219 6.11875 10.4125 6.30312 10 6.50312C9.59062 6.30312 9.17812 6.11875 8.77187 5.95C9.025 4.46875 9.4375 3.4375 10 3.4375ZM4.31563 6.71875C4.59688 6.23125 5.69687 6.39375 7.10625 6.9125C7.04688 7.34688 7.00312 7.79688 6.97187 8.25C6.59375 8.50625 6.22812 8.76875 5.88125 9.0375C4.725 8.07812 4.0375 7.20625 4.31875 6.71875H4.31563ZM4.31563 13.2812C4.03438 12.7937 4.725 11.9219 5.87812 10.9625C6.225 11.2313 6.59375 11.4937 6.96875 11.75C7 12.2031 7.04688 12.6531 7.10312 13.0875C5.69375 13.6063 4.59375 13.7688 4.3125 13.2812H4.31563ZM10 16.5625C9.4375 16.5625 9.02812 15.5312 8.77187 14.05C9.17812 13.8812 9.5875 13.6969 10 13.4969C10.4094 13.6969 10.8219 13.8812 11.2281 14.05C10.975 15.5312 10.5625 16.5625 10 16.5625ZM15.6844 13.2812C15.4031 13.7688 14.3031 13.6063 12.8937 13.0875C12.9531 12.6531 12.9969 12.2031 13.0281 11.75C13.4062 11.4937 13.7719 11.2313 14.1187 10.9625C15.275 11.9219 15.9625 12.7937 15.6812 13.2812H15.6844Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var scienceIcon = createIcon("science", iconDefinition);
export {
  scienceIcon,
  iconDefinition
};
