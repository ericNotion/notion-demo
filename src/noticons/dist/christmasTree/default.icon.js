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
// src/noticons/src/christmasTree/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.7906 9.95001C14.4344 9.70626 15.0531 9.40001 15.625 9.01564L12.4875 5.87814C13.1531 5.67189 13.7937 5.38439 14.375 4.99689L10.625 1.24689H9.375L5.625 4.99689C6.1875 5.37189 6.82812 5.66564 7.51562 5.87501L4.375 9.01564C4.93438 9.38751 5.55312 9.70001 6.2125 9.94689L3.125 13.0344C4.70312 14.0906 6.68125 14.7406 8.75 14.9344V17.5H11.25V14.9375C13.2437 14.7594 15.2094 14.15 16.875 13.0344L13.7906 9.95001ZM7.8125 13.125C7.29375 13.125 6.875 12.7063 6.875 12.1875C6.875 11.6688 7.29375 11.25 7.8125 11.25C8.33125 11.25 8.75 11.6688 8.75 12.1875C8.75 12.7063 8.33125 13.125 7.8125 13.125ZM8.75 4.68751C8.75 4.16876 9.16875 3.75001 9.6875 3.75001C10.2063 3.75001 10.625 4.16876 10.625 4.68751C10.625 5.20626 10.2063 5.62501 9.6875 5.62501C9.16875 5.62501 8.75 5.20626 8.75 4.68751ZM10.9375 10C10.4187 10 10 9.58126 10 9.06251C10 8.54376 10.4187 8.12501 10.9375 8.12501C11.4563 8.12501 11.875 8.54376 11.875 9.06251C11.875 9.58126 11.4563 10 10.9375 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var christmasTreeIcon = createIcon("christmasTree", iconDefinition);
export {
  iconDefinition,
  christmasTreeIcon
};
