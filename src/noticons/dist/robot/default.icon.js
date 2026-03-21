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
// src/noticons/src/robot/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.25 8.125V6.25C16.25 4.70625 15.2937 3.75 13.75 3.75H10.9375V0.625H9.0625V3.75H6.25C4.70625 3.75 3.75 4.70625 3.75 6.25V8.125H1.875V13.125H3.75V16.875H16.25V13.125H18.125V8.125H16.25ZM6.875 6.875C7.56563 6.875 8.125 7.43437 8.125 8.125C8.125 8.81563 7.56563 9.375 6.875 9.375C6.18437 9.375 5.625 8.81563 5.625 8.125C5.625 7.43437 6.18437 6.875 6.875 6.875ZM13.125 13.75H6.875C6.18437 13.75 5.625 13.1906 5.625 12.5C5.625 11.8094 6.18437 11.25 6.875 11.25H13.125C13.8156 11.25 14.375 11.8094 14.375 12.5C14.375 13.1906 13.8156 13.75 13.125 13.75ZM13.125 9.375C12.4344 9.375 11.875 8.81563 11.875 8.125C11.875 7.43437 12.4344 6.875 13.125 6.875C13.8156 6.875 14.375 7.43437 14.375 8.125C14.375 8.81563 13.8156 9.375 13.125 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var robotIcon = createIcon("robot", iconDefinition);
export {
  robotIcon,
  iconDefinition
};
