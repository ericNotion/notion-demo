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
// src/noticons/src/truck/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M17.5 8.75V10.625H16.25V15.625H15V17.5H12.5V15.625H7.5V17.5H5V15.625H3.75V10.625H2.5V8.75H4.21875L5 5.625H15L15.7812 8.75H17.5ZM14.3156 10.625H5.68125L6.4625 7.5H13.5344L14.3156 10.625ZM6.875 12.1875C7.39375 12.1875 7.8125 12.6062 7.8125 13.125C7.8125 13.6438 7.39375 14.0625 6.875 14.0625C6.35625 14.0625 5.9375 13.6438 5.9375 13.125C5.9375 12.6062 6.35625 12.1875 6.875 12.1875ZM14.0625 13.125C14.0625 13.6438 13.6438 14.0625 13.125 14.0625C12.6062 14.0625 12.1875 13.6438 12.1875 13.125C12.1875 12.6062 12.6062 12.1875 13.125 12.1875C13.6438 12.1875 14.0625 12.6062 14.0625 13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var truckIcon = createIcon("truck", iconDefinition);
export {
  truckIcon,
  iconDefinition
};
