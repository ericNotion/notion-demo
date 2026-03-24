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
// src/noticons/src/emojiSunglasses/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M12.8125 8.125H14.0625L13.125 10H11.875L12.8125 8.125ZM17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10ZM14.0625 12.5L13.0219 11.8062C13.0219 11.8062 12.0469 13.4375 10 13.4375C7.95312 13.4375 6.97813 11.8062 6.97813 11.8062L5.9375 12.5C5.9375 12.5 7.33437 14.6875 10 14.6875C12.6656 14.6875 14.0625 12.5 14.0625 12.5ZM15.625 8.125V6.875H4.375V8.125H5L5.1875 9.24062C5.36875 10.3344 6.08125 10.9375 7.1875 10.9375C8.29375 10.9375 9.00625 10.3344 9.1875 9.24375L9.27187 8.74375C9.3375 8.34687 9.59688 8.12813 10 8.12813C10.4031 8.12813 10.6625 8.34687 10.7281 8.74375L10.8125 9.24375C10.9937 10.3375 11.7063 10.9406 12.8125 10.9406C13.9187 10.9406 14.6313 10.3375 14.8125 9.24687L15 8.12813H15.625V8.125ZM6.25 10H7.5L8.4375 8.125H7.1875L6.25 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiSunglassesIcon = createIcon("emojiSunglasses", iconDefinition);
export {
  iconDefinition,
  emojiSunglassesIcon
};
