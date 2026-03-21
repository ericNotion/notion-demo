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
// src/noticons/src/football/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.0156 2.98438C15.8594 2.63438 15.0188 2.5 13.75 2.5C6.80938 2.5 2.5 6.80938 2.5 13.75C2.5 15.0188 2.63438 15.8625 2.98438 17.0156C4.14063 17.3656 4.98125 17.5 6.25 17.5C13.1906 17.5 17.5 13.1906 17.5 6.25C17.5 4.98125 17.3656 4.1375 17.0156 2.98438ZM13.3844 7.5L14.375 8.49062L13.4906 9.375L12.5 8.38438L10.8844 10L11.875 10.9906L10.9906 11.875L10 10.8844L8.38438 12.5L9.375 13.4906L8.49062 14.375L7.5 13.3844L5.88438 15L5 14.1156L6.61562 12.5L5.625 11.5094L6.50938 10.625L7.5 11.6156L9.11562 10L8.125 9.00938L9.00938 8.125L10 9.11562L11.6156 7.5L10.625 6.50938L11.5094 5.625L12.5 6.61562L14.1156 5L15 5.88438L13.3844 7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var footballIcon = createIcon("football", iconDefinition);
export {
  iconDefinition,
  footballIcon
};
