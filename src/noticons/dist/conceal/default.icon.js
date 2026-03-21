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
// src/noticons/src/conceal/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.75 8.75V10.625H1.25V8.75H4.39687C4.60312 5.65937 6.27812 2.5 7.8125 2.5C8.82188 2.5 9.22813 3.125 10 3.125C10.7719 3.125 11.2063 2.5 12.1875 2.5C13.7344 2.5 15.4031 5.62813 15.6031 8.75H18.75ZM2.5 11.875H17.5V13.75H16.25L15.9844 15.3438C15.7531 16.7344 14.8469 17.5 13.4375 17.5C12.0281 17.5 11.1219 16.7344 10.8906 15.3438L10.7281 14.3687C10.6625 13.9719 10.4031 13.7531 10 13.7531C9.59688 13.7531 9.3375 13.9719 9.27188 14.3687L9.10938 15.3438C8.87812 16.7344 7.97188 17.5 6.5625 17.5C5.15312 17.5 4.24688 16.7344 4.01562 15.3438L3.75 13.75H2.5V11.875ZM12.1875 16.25H13.4375L14.6875 13.75H13.4375L12.1875 16.25ZM5.3125 16.25H6.5625L7.8125 13.75H6.5625L5.3125 16.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var concealIcon = createIcon("conceal", iconDefinition);
export {
  iconDefinition,
  concealIcon
};
