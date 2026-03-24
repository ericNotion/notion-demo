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
// src/noticons/src/jackOLantern/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.125 4.375C12.0625 4.375 11.3906 4.68437 10.9281 4.99687C11.5031 3.24062 12.5 2.1875 12.5 2.1875L10.625 1.25C10.625 1.25 9.55937 2.8 9.28437 5.15312C8.82187 4.8 8.11562 4.375 6.875 4.375C4.78125 4.375 1.875 5.74688 1.875 10C1.875 14.7125 4.55313 16.875 6.875 16.875C8.31563 16.875 9.30312 16.25 10 16.25C10.6969 16.25 11.6844 16.875 13.125 16.875C15.4469 16.875 18.125 14.7125 18.125 10C18.125 5.74688 15.2188 4.375 13.125 4.375ZM5.3125 8.75L6.5625 6.875H7.1875L8.4375 8.75V9.375H5.3125V8.75ZM14.6875 12.5C14.6875 13.6562 13.9688 14.375 12.8125 14.375H7.1875C6.03125 14.375 5.3125 13.6562 5.3125 12.5V11.25H7.1875V12.5H9.0625V11.25H10.9375V12.5H12.8125V11.25H14.6875V12.5ZM14.6875 9.375H11.5625V8.75L12.8125 6.875H13.4375L14.6875 8.75V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var jackOLanternIcon = createIcon("jackOLantern", iconDefinition);
export {
  jackOLanternIcon,
  iconDefinition
};
