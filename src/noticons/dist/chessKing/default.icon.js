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
// src/noticons/src/chessKing/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.75 4.375C13.0656 4.375 12.4281 4.5625 11.875 4.88125V1.875H8.125V4.88125C7.57188 4.5625 6.93437 4.375 6.25 4.375C4.17812 4.375 2.5 6.05312 2.5 8.125V8.3375C2.5 9.01562 2.68438 9.68437 3.03438 10.2656L6.25 15.625H3.75V17.5H16.25V15.625H13.75L16.9656 10.2656C17.3156 9.68437 17.5 9.01562 17.5 8.3375V8.125C17.5 6.05312 15.8219 4.375 13.75 4.375ZM4.375 8.125C4.375 7.09062 5.21563 6.25 6.25 6.25C7.28438 6.25 8.125 7.09062 8.125 8.125V11.25H5.8125L4.64375 9.3C4.46875 9.00938 4.37813 8.675 4.37813 8.33437V8.12187L4.375 8.125ZM15.625 8.3375C15.625 8.67812 15.5313 9.0125 15.3594 9.30313L14.1906 11.2531H11.8781V8.12813C11.8781 7.09375 12.7187 6.25313 13.7531 6.25313C14.7875 6.25313 15.6281 7.09375 15.6281 8.12813V8.34063L15.625 8.3375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chessKingIcon = createIcon("chessKing", iconDefinition);
export {
  iconDefinition,
  chessKingIcon
};
