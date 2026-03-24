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
// src/noticons/src/dialogue/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M10 2.5C5.37187 2.5 2.5 5.13438 2.5 9.375C2.5 11.5375 3.25 13.2781 4.59375 14.4688L2.5 16.5625L3.125 17.5C4.81875 17.5 6.38438 16.9375 7.64062 15.9875C8.36563 16.1594 9.15312 16.25 10 16.25C14.6281 16.25 17.5 13.6156 17.5 9.375C17.5 5.13438 14.6281 2.5 10 2.5ZM11.25 14.0625H8.75V12.1875H11.25V14.0625ZM10.9375 10.9375H9.0625C9.0625 8.75 11.4062 8.80937 11.4062 7.65625C11.4062 6.9125 10.8719 6.5625 9.92188 6.5625C8.97188 6.5625 8.4375 6.9125 8.4375 7.8125H6.5625C6.5625 5.9 7.87813 4.6875 10 4.6875C12.1219 4.6875 13.4375 5.9 13.4375 7.65625C13.4375 9.84375 10.9375 9.78438 10.9375 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var dialogueIcon = createIcon("dialogue", iconDefinition);
export {
  iconDefinition,
  dialogueIcon
};
