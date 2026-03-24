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
// src/noticons/src/badge/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.125 2.5H6.875C5.33125 2.5 4.375 3.45625 4.375 5V15C4.375 16.5437 5.33125 17.5 6.875 17.5H13.125C14.6687 17.5 15.625 16.5437 15.625 15V5C15.625 3.45625 14.6687 2.5 13.125 2.5ZM8.125 4.375H11.875C12.2594 4.375 12.5 4.61562 12.5 5C12.5 5.38438 12.2594 5.625 11.875 5.625H8.125C7.74062 5.625 7.5 5.38438 7.5 5C7.5 4.61562 7.74062 4.375 8.125 4.375ZM11.5625 10.3125C11.5625 11.2781 10.9625 11.875 10 11.875C9.0375 11.875 8.4375 11.2781 8.4375 10.3125C8.4375 9.34688 9.03438 8.75 10 8.75C10.9656 8.75 11.5625 9.34688 11.5625 10.3125ZM7.1875 15.625C7.1875 13.8906 8.26562 12.8125 10 12.8125C11.7344 12.8125 12.8125 13.8906 12.8125 15.625H7.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var badgeIcon = createIcon("badge", iconDefinition);
export {
  iconDefinition,
  badgeIcon
};
