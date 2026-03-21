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
// src/noticons/src/wheelchairMotorized/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.2469 14.9656C16.2469 14.9656 16.2469 14.9875 16.2469 15C16.2469 16.3813 15.1281 17.5 13.7469 17.5C12.3656 17.5 11.2469 16.3813 11.2469 15H8.27814L7.07814 13.8L6.06251 14.8156C6.17814 15.0594 6.24689 15.3344 6.24689 15.6219C6.24689 16.6563 5.40626 17.4969 4.37189 17.4969C3.33751 17.4969 2.49689 16.6563 2.49689 15.6219C2.49689 14.5875 3.33751 13.7469 4.37189 13.7469C4.66251 13.7469 4.93439 13.8156 5.17814 13.9313L6.24689 12.8625V11.2469H5.30939L2.81251 2.5L3.53439 2.1375C3.92189 1.94375 4.21876 1.875 4.65314 1.875H4.86251C5.48751 1.875 5.89376 2.18125 6.06564 2.78125L6.36876 3.84063C6.50939 4.32812 6.40939 4.70937 6.05001 5.06875L5.62189 5.49688L5.74689 5.9375H6.02501C6.65001 5.9375 7.05626 6.24375 7.22814 6.84375L7.23751 6.875H11.8813V8.125H7.59689L7.95314 9.375H13.7563C14.5281 9.375 15.0063 9.85313 15.0063 10.625C15.0063 11.3969 14.5281 11.875 13.7563 11.875V12.5C14.6625 12.5 15.4531 12.9844 15.8938 13.7063L17.4406 12.675L18.1344 13.7156L16.2563 14.9656H16.2469Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var wheelchairMotorizedIcon = createIcon("wheelchairMotorized", iconDefinition);
export {
  wheelchairMotorizedIcon,
  iconDefinition
};
