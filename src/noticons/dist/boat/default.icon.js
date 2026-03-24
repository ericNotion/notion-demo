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
// src/noticons/src/boat/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M5.42187 14.6406C5.82187 14.8687 6.05625 15 6.25 15C6.44375 15 6.725 14.8406 7.07812 14.6406C7.74062 14.2656 8.64687 13.75 10 13.75C11.3531 13.75 12.2656 14.2656 12.9219 14.6406C13.3219 14.8687 13.5562 15 13.75 15C13.9437 15 14.225 14.8406 14.5781 14.6406C14.9281 14.4406 15.35 14.2062 15.8687 14.025L16.875 9.99999V9.27186L15.7062 9.07811L14.375 3.75311H12.5V1.87811H7.5V3.75311H5.625L4.29375 9.07811L3.125 9.27186V9.99999L4.13125 14.025C4.65 14.2062 5.07187 14.4437 5.42187 14.6437V14.6406ZM7.09062 5.62499H12.9125L13.6906 8.74061L10 8.12499L6.30937 8.74061L7.0875 5.62499H7.09062ZM17.5031 15V16.875C16.3219 16.875 15.5937 18.125 13.7531 18.125C11.9125 18.125 11.2094 16.875 10.0031 16.875C8.79687 16.875 8.09375 18.125 6.25312 18.125C4.4125 18.125 3.70937 16.875 2.50312 16.875V15C4.36875 15 5.04687 16.25 6.25312 16.25C7.45937 16.25 8.1625 15 10.0031 15C11.8437 15 12.5469 16.25 13.7531 16.25C14.9594 16.25 15.6625 15 17.5031 15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var boatIcon = createIcon("boat", iconDefinition);
export {
  iconDefinition,
  boatIcon
};
