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
// src/noticons/src/electricGuitar/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.75 13.4375C13.75 12.6594 14.375 12.2281 14.375 11.0938C14.375 10.0781 13.5312 9.375 12.5 9.375H12.1875V10.3125C12.1875 10.8906 11.8281 11.25 11.25 11.25H10.9375V5.3125L11.5094 4.74062C11.7438 4.50625 11.875 4.1875 11.875 3.85625V0H10.625L8.27187 3.53125C8.175 3.675 8.125 3.84375 8.125 4.01562C8.125 4.24688 8.21562 4.46875 8.38125 4.63125L9.0625 5.3125V10H8.75C8.17188 10 7.8125 9.64062 7.8125 9.0625V7.5H7.5C6.33438 7.5 5.3125 8.33125 5.3125 9.84375C5.3125 11.4312 6.5625 12.1906 6.5625 12.9688C6.5625 13.7469 5 14.6906 5 16.5625C5 18.7125 6.90937 20 10 20C13.0906 20 15 18.7125 15 16.5625C15 14.6906 13.75 14.2469 13.75 13.4375ZM11.5625 16.875H8.4375V15.625H11.5625V16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var electricGuitarIcon = createIcon("electricGuitar", iconDefinition);
export {
  iconDefinition,
  electricGuitarIcon
};
