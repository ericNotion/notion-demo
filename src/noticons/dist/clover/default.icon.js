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
// src/noticons/src/clover/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M11.875 9.375V9.99687C11.875 10.6687 12.0719 11.1281 12.5625 11.5875C14.5938 13.5031 15.625 14.6219 15.625 17.5H13.4375C13.4375 15.2563 13.0438 14.2031 11.6656 12.6312C11.1969 12.0969 10.7188 11.875 10.0094 11.875H9.37189V13.125C9.37189 15.75 8.44689 17.5 6.87189 17.5C5.83751 17.5 4.99689 16.7437 4.99689 15.625V15H4.37189C3.25314 15 2.49689 14.1594 2.49689 13.125C2.49689 11.55 4.24689 10.625 6.87189 10.625H8.12189V9.375H6.87189C4.24689 9.375 2.49689 8.45 2.49689 6.875C2.49689 5.84063 3.25314 5 4.37189 5H4.99689V4.375C4.99689 3.25625 5.83751 2.5 6.87189 2.5C8.44689 2.5 9.37189 4.25 9.37189 6.875V8.125H10.6219V6.875C10.6219 4.25 11.5469 2.5 13.1219 2.5C14.1563 2.5 14.9969 3.25625 14.9969 4.375V5H15.6219C16.7406 5 17.4969 5.84063 17.4969 6.875C17.4969 8.45 15.7469 9.375 13.1219 9.375H11.8719H11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cloverIcon = createIcon("clover", iconDefinition);
export {
  iconDefinition,
  cloverIcon
};
