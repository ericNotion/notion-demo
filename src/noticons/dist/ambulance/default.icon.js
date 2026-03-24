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
// src/noticons/src/ambulance/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.625 6.25H11.875V4.375H1.875V14.375H3.75V15C3.75 16.0344 4.59063 16.875 5.625 16.875C6.65938 16.875 7.5 16.0344 7.5 15V14.375H12.5V15C12.5 16.0344 13.3406 16.875 14.375 16.875C15.4094 16.875 16.25 16.0344 16.25 15V14.375H18.125V11.25L15.625 6.25ZM3.125 6.875V5.625H5V6.875H3.125ZM9.35313 10.7094L8.72813 11.7906L7.5 11.0812V12.5H6.25V11.0812L5.02187 11.7906L4.39687 10.7094L5.625 10L4.39687 9.29062L5.02187 8.20938L6.25 8.91875V7.5H7.5V8.91875L8.72813 8.20938L9.35313 9.29062L8.125 10L9.35313 10.7094ZM10.625 6.875H8.75V5.625H10.625V6.875ZM11.875 10.625V8.125H14.4656L15.7156 10.625H11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var ambulanceIcon = createIcon("ambulance", iconDefinition);
export {
  iconDefinition,
  ambulanceIcon
};
