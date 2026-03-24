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
// src/noticons/src/busMetro/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.5 6.25H16.25V5C16.25 3.4625 15.2875 2.5 13.75 2.5H6.25C4.7125 2.5 3.75 3.4625 3.75 5V6.25H2.5V10H3.75V15.625H5V17.5H7.5V15.625H12.5V17.5H15V15.625H16.25V10H17.5V6.25ZM8.125 3.75H11.875V5H8.125V3.75ZM6.875 13.75C6.35625 13.75 5.9375 13.3313 5.9375 12.8125C5.9375 12.2937 6.35625 11.875 6.875 11.875C7.39375 11.875 7.8125 12.2937 7.8125 12.8125C7.8125 13.3313 7.39375 13.75 6.875 13.75ZM9.0625 10H5.9375V6.25H9.0625V10ZM10.9375 6.25H14.0625V10H10.9375V6.25ZM12.1875 12.8125C12.1875 12.2937 12.6062 11.875 13.125 11.875C13.6438 11.875 14.0625 12.2937 14.0625 12.8125C14.0625 13.3313 13.6438 13.75 13.125 13.75C12.6062 13.75 12.1875 13.3313 12.1875 12.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var busMetroIcon = createIcon("busMetro", iconDefinition);
export {
  iconDefinition,
  busMetroIcon
};
