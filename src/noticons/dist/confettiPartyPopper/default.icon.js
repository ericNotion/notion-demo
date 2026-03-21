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
// src/noticons/src/confettiPartyPopper/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M12.1344 7.1875L14.375 9.42813L13.4906 10.3125L11.25 8.07188L12.1344 7.1875ZM5.3125 6.5625L1.875 16.875L3.125 18.125L13.4375 14.6875L14.375 13.75L6.25 5.625L5.3125 6.5625ZM11.25 4.375V3.75C11.25 2.85 11.6 2.5 12.5 2.5V1.25C10.8281 1.25 10 2.07812 10 3.75V4.375C10 5.275 9.65 5.625 8.75 5.625V6.875C10.4219 6.875 11.25 6.04688 11.25 4.375ZM17.5 5C17.5 6.5875 16.5875 7.5 15 7.5V8.75C17.2781 8.75 18.75 7.27812 18.75 5H17.5ZM14.0625 3.75C13.5437 3.75 13.125 4.16875 13.125 4.6875C13.125 5.20625 13.5437 5.625 14.0625 5.625C14.5813 5.625 15 5.20625 15 4.6875C15 4.16875 14.5813 3.75 14.0625 3.75ZM16.5625 10.3125C16.0437 10.3125 15.625 10.7312 15.625 11.25C15.625 11.7688 16.0437 12.1875 16.5625 12.1875C17.0813 12.1875 17.5 11.7688 17.5 11.25C17.5 10.7312 17.0813 10.3125 16.5625 10.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var confettiPartyPopperIcon = createIcon("confettiPartyPopper", iconDefinition);
export {
  iconDefinition,
  confettiPartyPopperIcon
};
