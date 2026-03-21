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
// src/noticons/src/vinylRecord/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M8.125 3.125C4.32812 3.125 1.25 6.20312 1.25 10C1.25 13.7969 4.32812 16.875 8.125 16.875C11.9219 16.875 15 13.7969 15 10C15 6.20312 11.9219 3.125 8.125 3.125ZM8.125 12.1875C6.91563 12.1875 5.9375 11.2094 5.9375 10C5.9375 8.79063 6.91563 7.8125 8.125 7.8125C9.33438 7.8125 10.3125 8.79063 10.3125 10C10.3125 11.2094 9.33438 12.1875 8.125 12.1875ZM9.0625 10C9.0625 10.5188 8.64375 10.9375 8.125 10.9375C7.60625 10.9375 7.1875 10.5188 7.1875 10C7.1875 9.48125 7.60625 9.0625 8.125 9.0625C8.64375 9.0625 9.0625 9.48125 9.0625 10ZM18.125 5.3125V12.0656C18.125 12.5563 18.0344 12.8906 17.7906 13.3156L15.375 17.5L13.75 16.5625L16.1656 12.3781C16.2281 12.2719 16.25 12.1875 16.25 12.0656V5.3125C16.25 4.73438 16.6094 4.375 17.1875 4.375C17.7656 4.375 18.125 4.73438 18.125 5.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var vinylRecordIcon = createIcon("vinylRecord", iconDefinition);
export {
  vinylRecordIcon,
  iconDefinition
};
