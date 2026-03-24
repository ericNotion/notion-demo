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
// src/noticons/src/emojiHeartEyes/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM5.02813 8.53125C4.89375 7.94062 5.25 7.4375 5.76563 7.33125C6.53438 7.16875 6.79063 7.87813 6.96563 7.84375C7.1375 7.80625 7.06563 7.05937 7.8375 6.89687C8.35 6.7875 8.89063 7.10313 9.02188 7.69375C9.27188 8.80938 8.37187 9.88125 7.77812 10.5062C7.6625 10.6281 7.52812 10.6562 7.36875 10.5906C6.5625 10.2625 5.28125 9.64687 5.02813 8.53125ZM10 14.6875C7.33437 14.6875 5.9375 12.5 5.9375 12.5L6.97813 11.8062C6.97813 11.8062 7.95312 13.4375 10 13.4375C12.0469 13.4375 13.0219 11.8062 13.0219 11.8062L14.0625 12.5C14.0625 12.5 12.6656 14.6875 10 14.6875ZM14.9719 8.53125C14.7219 9.64687 13.4375 10.2625 12.6312 10.5906C12.4719 10.6562 12.3406 10.6281 12.2219 10.5062C11.6281 9.88437 10.7281 8.8125 10.9781 7.69375C11.1125 7.10313 11.65 6.7875 12.1625 6.89687C12.9344 7.05937 12.8594 7.80625 13.0344 7.84375C13.2063 7.88125 13.4656 7.17187 14.2344 7.33125C14.7469 7.44062 15.1031 7.94062 14.9719 8.53125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiHeartEyesIcon = createIcon("emojiHeartEyes", iconDefinition);
export {
  iconDefinition,
  emojiHeartEyesIcon
};
