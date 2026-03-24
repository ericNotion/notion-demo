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
// src/noticons/src/binoculars/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.9719 11.8938L16.3281 5.31875C16.0063 4.03125 14.8469 3.125 13.5188 3.125C11.9188 3.125 10.6219 4.42188 10.6219 6.02188V8.925C10.4375 8.81875 10.225 8.75313 9.99688 8.75313C9.76875 8.75313 9.55625 8.81875 9.37188 8.925V6.02188C9.37188 4.42188 8.075 3.125 6.475 3.125C5.14688 3.125 3.9875 4.02813 3.66563 5.31875L2.02188 11.8938C1.92188 12.2969 1.86875 12.7094 1.86875 13.125C1.86875 15.1969 3.54688 16.875 5.61875 16.875C7.475 16.875 9.01563 15.5219 9.3125 13.75H10.675C10.9719 15.5219 12.5125 16.875 14.3688 16.875C16.4406 16.875 18.1188 15.1969 18.1188 13.125C18.1188 12.7094 18.0688 12.2969 17.9656 11.8938H17.9719ZM5.625 15C4.59063 15 3.75 14.1594 3.75 13.125C3.75 12.0906 4.59063 11.25 5.625 11.25C6.65938 11.25 7.5 12.0906 7.5 13.125C7.5 14.1594 6.65938 15 5.625 15ZM14.375 15C13.3406 15 12.5 14.1594 12.5 13.125C12.5 12.0906 13.3406 11.25 14.375 11.25C15.4094 11.25 16.25 12.0906 16.25 13.125C16.25 14.1594 15.4094 15 14.375 15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var binocularsIcon = createIcon("binoculars", iconDefinition);
export {
  iconDefinition,
  binocularsIcon
};
