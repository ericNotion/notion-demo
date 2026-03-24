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
// src/noticons/src/partlyCloudyNight/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.75 15C13.75 16.1562 13.0312 16.875 11.875 16.875H2.5C0.95625 16.875 0 15.9187 0 14.375C0 13.0531 0.70625 12.1625 1.87813 11.9344C1.87813 11.9156 1.87813 11.8938 1.87813 11.875C1.87813 9.5625 3.31562 8.125 5.62813 8.125C7.38125 8.125 8.63125 8.95 9.13125 10.3594C9.30625 10.3281 9.49375 10.3125 9.69063 10.3125C11.2344 10.3125 12.1906 11.2688 12.1906 12.8125C12.1906 12.9281 12.1844 13.0406 12.1719 13.15C13.1531 13.2656 13.7531 13.9469 13.7531 15H13.75ZM19.3656 7.18125C18.9094 8.34062 17.7812 9.16563 16.4594 9.16563C14.7344 9.16563 13.3344 7.76562 13.3344 6.04063C13.3344 4.71875 14.1562 3.59062 15.3188 3.13437L15 2.5C12.2375 2.5 10 4.7375 10 7.5C10 8.0625 10.0969 8.6 10.2656 9.10312C11.9969 9.31875 13.1812 10.5031 13.3969 12.2344C13.9 12.4063 14.4375 12.5 15 12.5C17.7625 12.5 20 10.2625 20 7.5L19.3656 7.18125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var partlyCloudyNightIcon = createIcon("partlyCloudyNight", iconDefinition);
export {
  partlyCloudyNightIcon,
  iconDefinition
};
