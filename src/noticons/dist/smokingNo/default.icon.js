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
// src/noticons/src/smokingNo/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M9.97813 12.1875H5.625V10.3125H8.10313L9.97813 12.1875ZM17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10ZM13.2562 14.5813L5.41875 6.74375C4.76562 7.6625 4.375 8.78438 4.375 10C4.375 13.1062 6.89375 15.625 10 15.625C11.2156 15.625 12.3375 15.2375 13.2562 14.5813ZM15.625 10C15.625 6.89375 13.1062 4.375 10 4.375C8.78438 4.375 7.6625 4.7625 6.74375 5.41875L14.5813 13.2562C15.2344 12.3375 15.625 11.2156 15.625 10ZM12.8125 10.6031L14.0625 11.8531V10.3125H12.8125V10.6031ZM12.5 7.1875H12.475C12.4937 7.0875 12.5 6.98438 12.5 6.875C12.5 5.95625 11.8562 5.3125 10.9375 5.3125H8.75V6.5625H10.025C10.0063 6.6625 10 6.76562 10 6.875C10 7.79375 10.6438 8.4375 11.5625 8.4375H12.5C12.7344 8.4375 12.8125 8.51562 12.8125 8.75V9.0625H14.0625V8.75C14.0625 7.83125 13.4187 7.1875 12.5 7.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var smokingNoIcon = createIcon("smokingNo", iconDefinition);
export {
  smokingNoIcon,
  iconDefinition
};
