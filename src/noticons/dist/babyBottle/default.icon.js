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
// src/noticons/src/babyBottle/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.5 3.46875C17.5 2.99063 17.0094 2.5 16.5312 2.5C16.3031 2.5 16.0719 2.60312 15.8687 2.80625L15.0187 3.65625C14.4719 3.30312 13.8969 3.12813 13.3187 3.12813C12.6625 3.12813 12.0062 3.35625 11.3937 3.81562L10.7031 3.125L9.37811 4.45L10.2562 5.32812L9.33436 6.25H8.54061C7.79999 6.25 7.29686 6.45938 6.77186 6.98125L3.32186 10.4313C2.77499 10.9781 2.50311 11.5875 2.50311 12.2C2.50311 12.8125 2.77499 13.4219 3.32186 13.9688L6.03749 16.6844C6.58436 17.2312 7.19374 17.5031 7.80624 17.5031C8.41874 17.5031 9.02811 17.2312 9.57499 16.6844L13.025 13.2344C13.55 12.7094 13.7562 12.2062 13.7562 11.4656V10.6719L14.6781 9.75L15.5562 10.6281L16.8812 9.30313L16.1906 8.6125C16.65 8 16.8781 7.34375 16.8781 6.6875C16.8781 6.1125 16.7031 5.53437 16.35 4.9875L17.2 4.1375C17.4031 3.93437 17.5062 3.70312 17.5062 3.475L17.5 3.46875ZM12.3937 9.375H7.02811L8.09374 8.30937C8.22499 8.17812 8.34999 8.125 8.53436 8.125H9.84686C10.0312 8.125 10.1594 8.07188 10.2875 7.94063L11.575 6.65313L13.3437 8.42188L12.3906 9.375H12.3937Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var babyBottleIcon = createIcon("babyBottle", iconDefinition);
export {
  iconDefinition,
  babyBottleIcon
};
