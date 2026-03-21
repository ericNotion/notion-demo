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
// src/noticons/src/clothesButton/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM7.1875 10.9375C6.66875 10.9375 6.25 10.5188 6.25 10C6.25 9.48125 6.66875 9.0625 7.1875 9.0625C7.70625 9.0625 8.125 9.48125 8.125 10C8.125 10.5188 7.70625 10.9375 7.1875 10.9375ZM10 13.75C9.48125 13.75 9.0625 13.3313 9.0625 12.8125C9.0625 12.2937 9.48125 11.875 10 11.875C10.5188 11.875 10.9375 12.2937 10.9375 12.8125C10.9375 13.3313 10.5188 13.75 10 13.75ZM10 8.125C9.48125 8.125 9.0625 7.70625 9.0625 7.1875C9.0625 6.66875 9.48125 6.25 10 6.25C10.5188 6.25 10.9375 6.66875 10.9375 7.1875C10.9375 7.70625 10.5188 8.125 10 8.125ZM12.8125 10.9375C12.2937 10.9375 11.875 10.5188 11.875 10C11.875 9.48125 12.2937 9.0625 12.8125 9.0625C13.3313 9.0625 13.75 9.48125 13.75 10C13.75 10.5188 13.3313 10.9375 12.8125 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var clothesButtonIcon = createIcon("clothesButton", iconDefinition);
export {
  iconDefinition,
  clothesButtonIcon
};
