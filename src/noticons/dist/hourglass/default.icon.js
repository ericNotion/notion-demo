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
// src/noticons/src/hourglass/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M14.375 6.46563V4.375H16.25V2.5H3.75V4.375H5.625V6.46563C5.625 7.20625 5.83438 7.70937 6.35625 8.23438L8.125 10.0031L6.35625 11.7719C5.83125 12.2969 5.625 12.8 5.625 13.5406V15.6313H3.75V17.5063H16.25V15.6313H14.375V13.5406C14.375 12.8 14.1656 12.2969 13.6438 11.7719L11.875 10.0031L13.6438 8.23438C14.1687 7.70937 14.375 7.20625 14.375 6.46563ZM12.3187 13.0938C12.4906 13.2656 12.5 13.2906 12.5 13.5344V14.375L11.1844 13.7156C10.775 13.5094 10.4594 13.4375 10 13.4375C9.54063 13.4375 9.22812 13.5125 8.81562 13.7156L7.5 14.375V13.5344C7.5 13.2906 7.50937 13.2656 7.68125 13.0938L10 10.7781L12.3187 13.0938ZM12.5 6.25H7.5V4.375H12.5V6.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hourglassIcon = createIcon("hourglass", iconDefinition);
export {
  iconDefinition,
  hourglassIcon
};
