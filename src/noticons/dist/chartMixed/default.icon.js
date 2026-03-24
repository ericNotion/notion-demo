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
// src/noticons/src/chartMixed/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.75 15V16.875H1.25V15H3.125V10.625H6.875V15H8.125V12.5H11.875V15H13.125V8.125H16.875V15H18.75ZM5 8.75C5.575 8.75 6.09062 8.49063 6.43437 8.08125L8.125 8.71562C8.125 8.71562 8.125 8.7375 8.125 8.75C8.125 9.78438 8.96562 10.625 10 10.625C11.0344 10.625 11.875 9.78438 11.875 8.75C11.875 8.50625 11.8281 8.27188 11.7406 8.05625L14.0813 6.00937C14.3531 6.1625 14.6656 6.25 15 6.25C16.0344 6.25 16.875 5.40937 16.875 4.375C16.875 3.34063 16.0344 2.5 15 2.5C13.9656 2.5 13.125 3.34063 13.125 4.375C13.125 4.61875 13.1719 4.85312 13.2594 5.06875L10.9187 7.11563C10.6469 6.9625 10.3344 6.875 10 6.875C9.425 6.875 8.90938 7.13437 8.56563 7.54375L6.875 6.90938C6.875 6.90938 6.875 6.8875 6.875 6.875C6.875 5.84063 6.03438 5 5 5C3.96563 5 3.125 5.84063 3.125 6.875C3.125 7.90938 3.96563 8.75 5 8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chartMixedIcon = createIcon("chartMixed", iconDefinition);
export {
  iconDefinition,
  chartMixedIcon
};
