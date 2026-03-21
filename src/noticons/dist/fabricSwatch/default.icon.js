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
// src/noticons/src/fabricSwatch/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.875 5.3125C16.875 4.525 17.5 4.64062 17.5 3.75C17.5 2.97812 17.0219 2.5 16.25 2.5C15.3469 2.5 15.4844 3.125 14.6875 3.125C13.8906 3.125 14.0156 2.5 13.125 2.5C12.2344 2.5 12.3594 3.125 11.5625 3.125C10.7656 3.125 10.8906 2.5 10 2.5C9.10938 2.5 9.23438 3.125 8.4375 3.125C7.64062 3.125 7.76562 2.5 6.875 2.5C5.98438 2.5 6.10938 3.125 5.3125 3.125C4.51562 3.125 4.64062 2.5 3.75 2.5C2.97812 2.5 2.5 2.97812 2.5 3.75C2.5 4.65313 3.125 4.51562 3.125 5.3125C3.125 6.10938 2.5 5.98438 2.5 6.875C2.5 7.76562 3.125 7.64062 3.125 8.4375C3.125 9.23438 2.5 9.10938 2.5 10C2.5 10.8906 3.125 10.7656 3.125 11.5625C3.125 12.3594 2.5 12.2344 2.5 13.125C2.5 14.0156 3.125 13.8906 3.125 14.6875C3.125 15.4844 2.5 15.3594 2.5 16.25C2.5 17.0219 2.97812 17.5 3.75 17.5C4.65313 17.5 4.51562 16.875 5.3125 16.875C6.10938 16.875 5.98438 17.5 6.875 17.5C7.76562 17.5 7.64062 16.875 8.4375 16.875C9.23438 16.875 9.10938 17.5 10 17.5C10.8906 17.5 10.7656 16.875 11.5625 16.875C12.3594 16.875 12.2344 17.5 13.125 17.5C14.0156 17.5 13.8906 16.875 14.6875 16.875C15.4844 16.875 15.3594 17.5 16.25 17.5C17.0219 17.5 17.5 17.0219 17.5 16.25C17.5 15.3469 16.875 15.4844 16.875 14.6875C16.875 13.8906 17.5 14.0156 17.5 13.125C17.5 12.2344 16.875 12.3594 16.875 11.5625C16.875 10.7656 17.5 10.8906 17.5 10C17.5 9.10938 16.875 9.23438 16.875 8.4375C16.875 7.64062 17.5 7.76562 17.5 6.875C17.5 5.98438 16.875 6.10938 16.875 5.3125ZM15 15H5V11.875H15V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fabricSwatchIcon = createIcon("fabricSwatch", iconDefinition);
export {
  iconDefinition,
  fabricSwatchIcon
};
