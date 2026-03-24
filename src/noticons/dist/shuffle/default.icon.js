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
// src/noticons/src/shuffle/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M14.2938 10.3125L18.3563 14.375L14.2938 18.4375L12.9688 17.1125L14.7687 15.3125H12.5375C11.3312 15.3125 10.4406 14.8562 9.74062 13.8719L8.89375 12.6875L10.0469 11.075L11.2656 12.7844C11.6156 13.275 11.9344 13.4375 12.5375 13.4375H14.7687L12.9688 11.6375L14.2938 10.3125ZM12.5375 6.5625H14.7687L12.9688 8.3625L14.2938 9.6875L18.3563 5.625L14.2938 1.5625L12.9688 2.8875L14.7687 4.6875H12.5375C11.3312 4.6875 10.4406 5.14375 9.74062 6.12813L4.9875 12.7844C4.6375 13.275 4.31875 13.4375 3.71563 13.4375H1.87813V15.3125H3.71563C4.92188 15.3125 5.8125 14.8562 6.5125 13.8719L11.2656 7.21562C11.6156 6.725 11.9344 6.5625 12.5375 6.5625ZM4.98438 7.21562L6.20312 8.925L7.35625 7.3125L6.50938 6.12813C5.80625 5.14688 4.91875 4.6875 3.7125 4.6875H1.875V6.5625H3.7125C4.3125 6.5625 4.63437 6.72813 4.98438 7.21562Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shuffleIcon = createIcon("shuffle", iconDefinition);
export {
  shuffleIcon,
  iconDefinition
};
