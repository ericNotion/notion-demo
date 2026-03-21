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
// src/noticons/src/luggageCart/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M5 13.125H18.125V15H15.9375V15.9375C15.9375 16.8 15.2375 17.5 14.375 17.5C13.5125 17.5 12.8125 16.8 12.8125 15.9375V15H9.375V15.9375C9.375 16.8 8.675 17.5 7.8125 17.5C6.95 17.5 6.25 16.8 6.25 15.9375V15H5C3.52813 15 2.5 13.9719 2.5 12.5V6.875C2.5 6.43125 2.31875 6.25 1.875 6.25H0.625V4.375H1.875C3.34687 4.375 4.375 5.40312 4.375 6.875V12.5C4.375 12.9438 4.55625 13.125 5 13.125ZM18.125 7.5V9.375C18.125 10.9187 17.1688 11.875 15.625 11.875H8.125C6.58125 11.875 5.625 10.9187 5.625 9.375V7.5C5.625 5.9625 6.5875 5 8.125 5V3.75C8.125 2.20625 9.08125 1.25 10.625 1.25H13.125C14.6687 1.25 15.625 2.20625 15.625 3.75V5C17.1625 5 18.125 5.9625 18.125 7.5ZM13.75 3.75C13.75 3.24063 13.6344 3.125 13.125 3.125H10.625C10.1156 3.125 10 3.24063 10 3.75V5H13.75V3.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var luggageCartIcon = createIcon("luggageCart", iconDefinition);
export {
  luggageCartIcon,
  iconDefinition
};
