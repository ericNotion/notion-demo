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
// src/noticons/src/broccoli/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.7125 10.275C16.4125 9.35938 16.875 8.35938 16.875 7.50625C16.875 5.525 14.475 3.125 12.4938 3.125C11.5875 3.125 10.5219 3.64375 9.56251 4.4125C8.93751 3.37812 7.75001 2.5 6.71251 2.5C4.99376 2.5 2.49689 4.99375 2.49689 6.71562C2.49689 8.04688 3.94064 9.625 5.30939 9.94062V11.3688C5.30939 12.4813 4.99689 13.2344 4.21251 14.0219L3.12189 15.1125L4.89064 16.8813L5.98126 15.7906C6.76564 15.0062 7.52189 14.6938 8.63439 14.6938H9.77814C10.1656 16.0844 11.7625 17.5063 13.1094 17.5063C14.9 17.5063 17.5 14.9062 17.5 13.1156C17.5 12.1063 16.7 10.9563 15.7125 10.2813V10.275ZM7.18751 12.8125V10.0563C7.70314 11.2094 8.78751 12.2969 9.94376 12.8125H7.18751Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var broccoliIcon = createIcon("broccoli", iconDefinition);
export {
  iconDefinition,
  broccoliIcon
};
