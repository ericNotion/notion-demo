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
// src/noticons/src/walk/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M8.4375 3.75C8.4375 2.78438 9.03438 2.1875 10 2.1875C10.9656 2.1875 11.5625 2.78438 11.5625 3.75C11.5625 4.71563 10.9656 5.3125 10 5.3125C9.03438 5.3125 8.4375 4.71563 8.4375 3.75ZM12.3469 8.98125C12.9625 9.7125 13.7312 10.625 15.625 10.625V9.0625C14.4563 9.0625 14.0938 8.63125 13.5406 7.975C12.8938 7.20625 12.0875 6.25 10 6.25C6.9625 6.25 5 8.2125 5 11.25H6.5625C6.5625 9.65938 7.23125 8.5625 8.4375 8.08438V10C8.4375 12.15 7.3125 14.2437 5 16.1719L6.32812 17.5C8.26875 15.8844 9.45937 14.1406 9.99062 12.2969C10.8562 13.0812 12.5 14.9125 12.5 17.5H14.375C14.375 14.4875 12.7031 12.325 11.5625 11.2031V8.20312C11.8594 8.40625 12.0875 8.675 12.3469 8.98125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var walkIcon = createIcon("walk", iconDefinition);
export {
  walkIcon,
  iconDefinition
};
