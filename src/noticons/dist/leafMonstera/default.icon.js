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
// src/noticons/src/leafMonstera/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.5 11.5625C17.5 10.575 17.375 9.63442 17.1375 8.75317C16.4594 9.26255 15.6937 9.68755 15.0781 9.68755C14.6469 9.68755 14.2969 9.33755 14.2969 8.9063C14.2969 8.1313 15.4531 7.90317 16.45 6.96567C15.9469 5.9813 15.2625 5.09692 14.4062 4.32505C14.0719 5.06255 13.3312 6.56567 12.3437 6.56567C11.9125 6.56567 11.5625 6.21567 11.5625 5.78442C11.5625 5.00005 12.8062 4.4813 12.8062 3.12817L12.85 3.15005L10.0031 1.25317L7.19061 3.12817C7.19061 4.4813 8.44061 5.00005 8.44061 5.78442C8.44061 6.21567 8.09061 6.56567 7.65936 6.56567C6.67186 6.56567 5.92499 5.0688 5.59061 4.3313C4.73749 5.10317 4.05311 5.98442 3.55311 6.9688C4.54999 7.9063 5.70624 8.13442 5.70624 8.90942C5.70624 9.34067 5.35624 9.69067 4.92499 9.69067C4.31249 9.69067 3.54686 9.26567 2.86561 8.7563C2.62499 9.63755 2.50311 10.5782 2.50311 11.5657C2.50311 11.5657 3.08436 12.4563 5.31561 12.8157L3.32499 14.1438C3.99061 15.0313 5.04999 15.6282 6.47811 15.6282C8.13124 15.6282 9.38124 14.6907 9.38124 14.6907C9.38124 14.6907 9.06874 16.2532 9.06874 17.5032H10.9437C10.9437 16.2532 10.6312 14.6907 10.6312 14.6907C10.6312 14.6907 11.8812 15.6282 13.5344 15.6282C14.9625 15.6282 16.0219 15.0313 16.6875 14.1438L14.6969 12.8157C16.9281 12.4563 17.5094 11.5657 17.5094 11.5657L17.5 11.5625ZM8.12499 12.5C7.35311 12.5 6.87499 12.0813 6.87499 11.4063C6.87499 10.7313 7.35311 10.3125 8.12499 10.3125C8.89686 10.3125 9.37499 10.7313 9.37499 11.4063C9.37499 12.0813 8.89686 12.5 8.12499 12.5ZM11.5625 9.68755C10.9844 9.68755 10.625 9.38755 10.625 8.9063C10.625 8.42505 10.9844 8.12505 11.5625 8.12505C12.1406 8.12505 12.5 8.42505 12.5 8.9063C12.5 9.38755 12.1406 9.68755 11.5625 9.68755Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var leafMonsteraIcon = createIcon("leafMonstera", iconDefinition);
export {
  leafMonsteraIcon,
  iconDefinition
};
