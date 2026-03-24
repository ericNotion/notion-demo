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
// src/noticons/src/baggageClaim/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M5 5V14.375C3.45625 14.375 2.5 13.4187 2.5 11.875V7.5C2.5 5.95625 3.45625 5 5 5ZM13.75 14.375H6.25V3.75C6.25 2.20625 7.20625 1.25 8.75 1.25H11.25C12.7937 1.25 13.75 2.20625 13.75 3.75V14.375ZM11.875 3.75C11.875 3.24063 11.7594 3.125 11.25 3.125H8.75C8.24062 3.125 8.125 3.24063 8.125 3.75V5H11.875V3.75ZM3.75 15.625C3.23125 15.625 2.8125 16.0437 2.8125 16.5625C2.8125 17.0813 3.23125 17.5 3.75 17.5C4.26875 17.5 4.6875 17.0813 4.6875 16.5625C4.6875 16.0437 4.26875 15.625 3.75 15.625ZM6.875 15.625C6.35625 15.625 5.9375 16.0437 5.9375 16.5625C5.9375 17.0813 6.35625 17.5 6.875 17.5C7.39375 17.5 7.8125 17.0813 7.8125 16.5625C7.8125 16.0437 7.39375 15.625 6.875 15.625ZM15 5V14.375C16.5437 14.375 17.5 13.4187 17.5 11.875V7.5C17.5 5.95625 16.5437 5 15 5ZM16.25 15.625C15.7312 15.625 15.3125 16.0437 15.3125 16.5625C15.3125 17.0813 15.7312 17.5 16.25 17.5C16.7688 17.5 17.1875 17.0813 17.1875 16.5625C17.1875 16.0437 16.7688 15.625 16.25 15.625ZM13.125 15.625C12.6062 15.625 12.1875 16.0437 12.1875 16.5625C12.1875 17.0813 12.6062 17.5 13.125 17.5C13.6438 17.5 14.0625 17.0813 14.0625 16.5625C14.0625 16.0437 13.6438 15.625 13.125 15.625ZM10 15.625C9.48125 15.625 9.0625 16.0437 9.0625 16.5625C9.0625 17.0813 9.48125 17.5 10 17.5C10.5188 17.5 10.9375 17.0813 10.9375 16.5625C10.9375 16.0437 10.5188 15.625 10 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var baggageClaimIcon = createIcon("baggageClaim", iconDefinition);
export {
  iconDefinition,
  baggageClaimIcon
};
