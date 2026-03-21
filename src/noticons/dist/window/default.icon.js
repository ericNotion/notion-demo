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
// src/noticons/src/window/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.625 3.75H4.375C2.83125 3.75 1.875 4.70625 1.875 6.25V13.75C1.875 15.2937 2.83125 16.25 4.375 16.25H15.625C17.1687 16.25 18.125 15.2937 18.125 13.75V6.25C18.125 4.70625 17.1687 3.75 15.625 3.75ZM10.9375 5.625C11.4563 5.625 11.875 6.04375 11.875 6.5625C11.875 7.08125 11.4563 7.5 10.9375 7.5C10.4187 7.5 10 7.08125 10 6.5625C10 6.04375 10.4187 5.625 10.9375 5.625ZM7.8125 5.625C8.33125 5.625 8.75 6.04375 8.75 6.5625C8.75 7.08125 8.33125 7.5 7.8125 7.5C7.29375 7.5 6.875 7.08125 6.875 6.5625C6.875 6.04375 7.29375 5.625 7.8125 5.625ZM4.6875 5.625C5.20625 5.625 5.625 6.04375 5.625 6.5625C5.625 7.08125 5.20625 7.5 4.6875 7.5C4.16875 7.5 3.75 7.08125 3.75 6.5625C3.75 6.04375 4.16875 5.625 4.6875 5.625ZM16.25 13.75C16.25 14.1344 16.0094 14.375 15.625 14.375H4.375C3.99062 14.375 3.75 14.1344 3.75 13.75V10C3.75 9.61562 3.99062 9.375 4.375 9.375H15.625C16.0094 9.375 16.25 9.61562 16.25 10V13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var windowIcon = createIcon("window", iconDefinition);
export {
  windowIcon,
  iconDefinition
};
