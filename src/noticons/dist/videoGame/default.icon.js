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
// src/noticons/src/videoGame/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.75 5H6.25C3.9375 5 2.5 6.4375 2.5 8.75V14.2156C2.5 15.4719 3.27813 16.25 4.53438 16.25C5.29375 16.25 5.80625 15.975 6.22813 15.3438L8.125 12.5H11.875L13.7719 15.3438C14.1938 15.975 14.7063 16.25 15.4656 16.25C16.7219 16.25 17.5 15.4719 17.5 14.2156V8.75C17.5 6.4375 16.0625 5 13.75 5ZM8.125 9.375H6.875V10.625H5.625V9.375H4.375V8.125H5.625V6.875H6.875V8.125H8.125V9.375ZM12.5 10.625C11.9812 10.625 11.5625 10.2063 11.5625 9.6875C11.5625 9.16875 11.9812 8.75 12.5 8.75C13.0188 8.75 13.4375 9.16875 13.4375 9.6875C13.4375 10.2063 13.0188 10.625 12.5 10.625ZM15 8.75C14.4812 8.75 14.0625 8.33125 14.0625 7.8125C14.0625 7.29375 14.4812 6.875 15 6.875C15.5188 6.875 15.9375 7.29375 15.9375 7.8125C15.9375 8.33125 15.5188 8.75 15 8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var videoGameIcon = createIcon("videoGame", iconDefinition);
export {
  videoGameIcon,
  iconDefinition
};
