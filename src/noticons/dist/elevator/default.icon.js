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
// src/noticons/src/elevator/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.675 10.9375L20 12.2625L15.9375 16.325L11.875 12.2625L13.2 10.9375L15 12.7375V7.26562L13.2 9.06563L11.875 7.74063L15.9375 3.67813L20 7.74063L18.675 9.06563L16.875 7.26562V12.7375L18.675 10.9375ZM0 3.125H10.625V16.875H0V3.125ZM4.0625 5.3125C4.0625 6.08437 4.54063 6.5625 5.3125 6.5625C6.08437 6.5625 6.5625 6.08437 6.5625 5.3125C6.5625 4.54062 6.08437 4.0625 5.3125 4.0625C4.54063 4.0625 4.0625 4.54062 4.0625 5.3125ZM1.09375 9.43438L1.74375 10.4094L4.14062 8.8125V10.7062L2.5 15.6281H3.98125L5.3125 11.6375L6.64375 15.6281H8.125L6.48438 10.7062V8.8125L8.88125 10.4094L9.53125 9.43438L6.87187 7.6625C6.35625 7.31875 5.93437 7.19063 5.3125 7.19063C4.69063 7.19063 4.26875 7.31875 3.75313 7.6625L1.09375 9.43438Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var elevatorIcon = createIcon("elevator", iconDefinition);
export {
  iconDefinition,
  elevatorIcon
};
