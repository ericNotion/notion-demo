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
// src/noticons/src/pregnancyTest/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M3.31875 13.1469C2.77187 13.6938 2.5 14.3032 2.5 14.9157C2.5 15.5282 2.77187 16.1375 3.31875 16.6844C3.86562 17.2313 4.475 17.5032 5.0875 17.5032C5.7 17.5032 6.30938 17.2313 6.85625 16.6844L13.2031 10.3375L9.66875 6.80317L3.32188 13.15L3.31875 13.1469ZM5.4625 15.4219C5.325 15.5594 5.17188 15.625 5.02187 15.625C4.70312 15.625 4.375 15.2969 4.375 14.9782C4.375 14.825 4.44375 14.6719 4.57812 14.5375L5.36562 13.75L6.25 14.6344L5.4625 15.4219ZM7.91875 12.9657L7.13125 13.7532L6.24687 12.8688L7.03438 12.0813C7.17188 11.9438 7.325 11.8782 7.475 11.8782C7.79375 11.8782 8.12187 12.2063 8.12187 12.525C8.12187 12.6782 8.05312 12.8313 7.91875 12.9657ZM17.4969 4.2688L16.6281 6.3688C16.3469 7.04692 16.0625 7.47192 15.5438 7.99067L14.0813 9.45317L12.7563 8.12817L14.9969 5.88755L14.1125 5.00317L11.8719 7.2438L10.5469 5.9188L12.0094 4.4563C12.5281 3.93755 12.9531 3.65317 13.6312 3.37192L15.7312 2.50317L17.5 4.27192L17.4969 4.2688Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pregnancyTestIcon = createIcon("pregnancyTest", iconDefinition);
export {
  pregnancyTestIcon,
  iconDefinition
};
