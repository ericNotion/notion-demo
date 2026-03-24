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
// src/noticons/src/archery/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.875 6.25L18.125 1.875L13.75 3.125V5.36562L12.7844 6.33125C11.5125 5.21875 9.95311 4.46563 8.41874 4.38125C7.49061 4.33125 6.58436 4.51562 5.73436 4.90625C5.59374 4.97187 5.48749 4.99687 5.33124 4.99687C4.74374 4.99687 4.37811 4.63125 4.37811 4.04375V3.74687H2.50311V4.84375C2.50311 5.58437 2.71249 6.0875 3.23436 6.6125L7.86874 11.2469L6.61874 12.4969H4.37811L1.87811 14.9969V16.2469H3.75311V18.1219H5.00311L7.50311 15.6219V13.3813L8.75311 12.1313L13.3875 16.7656C13.9125 17.2906 14.4156 17.4969 15.1562 17.4969H16.2531V15.6219H15.9562C15.3687 15.6219 15.0031 15.2562 15.0031 14.6687C15.0031 14.5125 15.0312 14.4062 15.0969 14.2656C15.4875 13.4125 15.6719 12.5094 15.6219 11.5781C15.5406 10.0437 14.7875 8.48438 13.6719 7.2125L14.6375 6.24687H16.8781L16.875 6.25ZM5.57499 7.19063C6.42186 6.53125 7.35936 6.20625 8.31874 6.25625C9.37186 6.3125 10.4906 6.86875 11.4406 7.675L8.74999 10.3656L5.57499 7.19063ZM13.7469 11.6813C13.7969 12.6406 13.4719 13.5781 12.8125 14.425L9.63749 11.25L12.3281 8.55937C13.1344 9.50937 13.6906 10.6313 13.7469 11.6813Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var archeryIcon = createIcon("archery", iconDefinition);
export {
  iconDefinition,
  archeryIcon
};
