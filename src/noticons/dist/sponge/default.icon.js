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
// src/noticons/src/sponge/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M14.6875 4.375C13.825 4.375 13.125 3.675 13.125 2.8125C13.125 1.95 13.825 1.25 14.6875 1.25C15.55 1.25 16.25 1.95 16.25 2.8125C16.25 3.675 15.55 4.375 14.6875 4.375ZM17.5 5.625C16.8094 5.625 16.25 6.18437 16.25 6.875C16.25 7.56563 16.8094 8.125 17.5 8.125C18.1906 8.125 18.75 7.56563 18.75 6.875C18.75 6.18437 18.1906 5.625 17.5 5.625ZM15.3125 9.375C14.7937 9.375 14.375 9.79375 14.375 10.3125C14.375 10.8313 14.7937 11.25 15.3125 11.25C15.8313 11.25 16.25 10.8313 16.25 10.3125C16.25 9.79375 15.8313 9.375 15.3125 9.375ZM10.0594 5H12.5V9.31563C11.9406 9.64062 11.5625 10.2437 11.5625 10.9375C11.5625 11.6313 11.9406 12.2344 12.5 12.5594V17.5H2.5V5H6.81562C7.14062 5.55937 7.74375 5.9375 8.4375 5.9375C9.13125 5.9375 9.73437 5.55937 10.0594 5ZM7.5 10C7.5 9.30937 6.94063 8.75 6.25 8.75C5.55938 8.75 5 9.30937 5 10C5 10.6906 5.55938 11.25 6.25 11.25C6.94063 11.25 7.5 10.6906 7.5 10ZM9.375 14.0625C9.375 13.5437 8.95625 13.125 8.4375 13.125C7.91875 13.125 7.5 13.5437 7.5 14.0625C7.5 14.5813 7.91875 15 8.4375 15C8.95625 15 9.375 14.5813 9.375 14.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var spongeIcon = createIcon("sponge", iconDefinition);
export {
  spongeIcon,
  iconDefinition
};
