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
// src/noticons/src/leo/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.25 14.375C16.25 15.4094 15.4094 16.25 14.375 16.25C13.3406 16.25 12.5 15.4094 12.5 14.375C12.5 13.1313 12.7875 12.0312 13.0938 10.8625C13.4156 9.63125 13.75 8.35938 13.75 6.875C13.75 4.11875 11.5063 1.875 8.75 1.875C5.99375 1.875 3.75 4.11875 3.75 6.875C3.75 8.30937 4.39063 9.49062 5.0375 10.6281C5.025 10.6281 5.0125 10.6281 5 10.6281C3.27812 10.6281 1.875 12.0312 1.875 13.7531C1.875 15.475 3.27812 16.8781 5 16.8781C6.72188 16.8781 8.125 15.475 8.125 13.7531C8.125 12.2531 7.42813 11.0312 6.75 9.85C6.17188 8.8375 5.625 7.87813 5.625 6.87813C5.625 5.15625 7.02812 3.75313 8.75 3.75313C10.4719 3.75313 11.875 5.15625 11.875 6.87813C11.875 8.12188 11.5875 9.22188 11.2812 10.3906C10.9594 11.6219 10.625 12.8937 10.625 14.3781C10.625 16.4469 12.3062 18.1281 14.375 18.1281C16.4438 18.1281 18.125 16.4469 18.125 14.3781H16.25V14.375ZM6.25 13.75C6.25 14.4406 5.69062 15 5 15C4.30938 15 3.75 14.4406 3.75 13.75C3.75 13.0594 4.30938 12.5 5 12.5C5.69062 12.5 6.25 13.0594 6.25 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var leoIcon = createIcon("leo", iconDefinition);
export {
  leoIcon,
  iconDefinition
};
