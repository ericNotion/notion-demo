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
// src/noticons/src/database/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.25 5V6.25C16.25 7.63125 13.4531 8.75 10 8.75C6.54688 8.75 3.75 7.63125 3.75 6.25V5C3.75 3.61875 6.54688 2.5 10 2.5C13.4531 2.5 16.25 3.61875 16.25 5ZM10 14.375C7.21563 14.375 5.25625 13.8062 4.0375 12.9969C3.85 13.2344 3.75 13.4875 3.75 13.75V15C3.75 16.3813 6.54688 17.5 10 17.5C13.4531 17.5 16.25 16.3813 16.25 15V13.75C16.25 13.4875 16.1469 13.2344 15.9625 12.9969C14.7438 13.8031 12.7844 14.375 10 14.375ZM10 10C7.21563 10 5.25625 9.43125 4.0375 8.62187C3.85 8.85938 3.75 9.1125 3.75 9.375V10.625C3.75 12.0063 6.54688 13.125 10 13.125C13.4531 13.125 16.25 12.0063 16.25 10.625V9.375C16.25 9.1125 16.1469 8.85938 15.9625 8.62187C14.7438 9.42812 12.7844 10 10 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var databaseIcon = createIcon("database", iconDefinition);
export {
  iconDefinition,
  databaseIcon
};
