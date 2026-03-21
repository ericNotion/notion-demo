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
// src/noticons/src/train/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M14.375 15.625L15.9375 18.75H13.8281L13.2031 17.5H6.79688L6.17188 18.75H4.0625L5.625 15.625H14.375ZM15.9375 3.75V12.8125L14.375 14.375H5.625L4.0625 12.8125V3.75C4.0625 3.75 5.98437 1.875 10 1.875C14.0156 1.875 15.9375 3.75 15.9375 3.75ZM7.8125 11.5625C7.8125 11.0437 7.39375 10.625 6.875 10.625C6.35625 10.625 5.9375 11.0437 5.9375 11.5625C5.9375 12.0813 6.35625 12.5 6.875 12.5C7.39375 12.5 7.8125 12.0813 7.8125 11.5625ZM9.0625 5H5.9375V7.5H9.0625V5ZM14.0625 11.5625C14.0625 11.0437 13.6438 10.625 13.125 10.625C12.6062 10.625 12.1875 11.0437 12.1875 11.5625C12.1875 12.0813 12.6062 12.5 13.125 12.5C13.6438 12.5 14.0625 12.0813 14.0625 11.5625ZM14.0625 5H10.9375V7.5H14.0625V5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var trainIcon = createIcon("train", iconDefinition);
export {
  trainIcon,
  iconDefinition
};
