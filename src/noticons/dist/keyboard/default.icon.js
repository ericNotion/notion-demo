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
// src/noticons/src/keyboard/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.1875 3.75H2.8125C2.04062 3.75 1.5625 4.22812 1.5625 5V15C1.5625 15.7719 2.04062 16.25 2.8125 16.25H17.1875C17.9594 16.25 18.4375 15.7719 18.4375 15V5C18.4375 4.22812 17.9594 3.75 17.1875 3.75ZM10.9375 5.625H12.8125V7.1875H10.9375V5.625ZM7.1875 5.625H9.0625V7.1875H7.1875V5.625ZM10.9375 9.0625V10.625H9.0625V9.0625H10.9375ZM3.4375 5.625H5.3125V7.1875H3.4375V5.625ZM5.3125 14.0625H3.4375V12.5H5.3125V14.0625ZM5.3125 9.0625H7.1875V10.625H5.3125V9.0625ZM12.8125 14.0625H7.1875V12.5H12.8125V14.0625ZM12.8125 9.0625H14.6875V10.625H12.8125V9.0625ZM16.5625 14.0625H14.6875V12.5H16.5625V14.0625ZM16.5625 7.1875H14.6875V5.625H16.5625V7.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var keyboardIcon = createIcon("keyboard", iconDefinition);
export {
  keyboardIcon,
  iconDefinition
};
