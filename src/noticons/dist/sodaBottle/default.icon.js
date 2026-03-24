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
// src/noticons/src/sodaBottle/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M7.46562 10.6906C7.25937 11.1 7.1875 11.4156 7.1875 11.875C7.1875 12.3344 7.2625 12.6469 7.46562 13.0594L7.84375 13.8156C8.05 14.225 8.12187 14.5406 8.12187 15C8.12187 15.4594 8.04687 15.7719 7.84375 16.1844L7.18437 17.5H2.80937L2.15 16.1844C1.94375 15.775 1.87187 15.4594 1.87187 15C1.87187 14.5406 1.94687 14.2281 2.15 13.8156L2.52812 13.0594C2.73437 12.65 2.80625 12.3344 2.80625 11.875C2.80625 11.4156 2.73125 11.1031 2.52812 10.6906L2.15 9.93438C1.94375 9.525 1.87187 9.20937 1.87187 8.75V7.34688C1.87187 6.5625 2.09375 6.02813 2.64687 5.475L2.97187 5.15C3.52812 4.59375 3.74687 4.0625 3.74687 3.27812V3.125H3.12187V1.25H6.87187V3.125H6.24687V3.27812C6.24687 4.0625 6.46875 4.59687 7.02187 5.15L7.34687 5.475C7.90312 6.03125 8.12187 6.5625 8.12187 7.34688V8.75C8.12187 9.20937 8.04687 9.52188 7.84375 9.93438L7.46562 10.6906ZM18.75 2.5L17.5 17.5H10.625L9.375 2.5H18.75ZM11.4125 4.375L11.6219 6.875H16.5062L16.7156 4.375H11.4156H11.4125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sodaBottleIcon = createIcon("sodaBottle", iconDefinition);
export {
  sodaBottleIcon,
  iconDefinition
};
