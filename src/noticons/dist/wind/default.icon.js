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
// src/noticons/src/wind/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M6.40625 7.5H3.125V5.625H6.40625C7.62813 5.625 8.125 5.12812 8.125 3.90625V2.5H10V3.90625C10 6.15625 8.65625 7.5 6.40625 7.5ZM12.1875 11.875H3.125V13.75H12.1875C12.8875 13.75 13.125 13.9875 13.125 14.6875C13.125 15.3875 12.8875 15.625 12.1875 15.625H10.625V17.5H12.1875C13.9219 17.5 15 16.4219 15 14.6875C15 12.9531 13.9219 11.875 12.1875 11.875ZM14.0625 3.75C12.0063 3.75 10.625 5.13125 10.625 7.1875V7.5H12.5V7.1875C12.5 6.16563 13.0406 5.625 14.0625 5.625C15.0844 5.625 15.625 6.16563 15.625 7.1875C15.625 8.20937 15.0844 8.75 14.0625 8.75H3.125V10.625H14.0625C16.1187 10.625 17.5 9.24375 17.5 7.1875C17.5 5.13125 16.1187 3.75 14.0625 3.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var windIcon = createIcon("wind", iconDefinition);
export {
  windIcon,
  iconDefinition
};
