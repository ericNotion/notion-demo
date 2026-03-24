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
// src/noticons/src/chessQueen/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.5719 7.47188L13.8531 15.625H16.25V17.5H3.75V15.625H6.14687L3.42813 7.47188C2.54688 7.31875 1.875 6.55312 1.875 5.625C1.875 4.59063 2.71563 3.75 3.75 3.75C4.78437 3.75 5.625 4.59063 5.625 5.625C5.625 6.09375 5.45 6.52187 5.16563 6.85L7.89062 10.9375L9.11875 5.40625C8.52813 5.09062 8.125 4.46875 8.125 3.75C8.125 2.71563 8.96562 1.875 10 1.875C11.0344 1.875 11.875 2.71563 11.875 3.75C11.875 4.46875 11.4719 5.09062 10.8813 5.40625L12.1094 10.9375L14.8344 6.85C14.55 6.52187 14.375 6.09375 14.375 5.625C14.375 4.59063 15.2156 3.75 16.25 3.75C17.2844 3.75 18.125 4.59063 18.125 5.625C18.125 6.55 17.4531 7.31875 16.5719 7.47188Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chessQueenIcon = createIcon("chessQueen", iconDefinition);
export {
  iconDefinition,
  chessQueenIcon
};
