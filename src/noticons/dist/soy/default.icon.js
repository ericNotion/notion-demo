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
// src/noticons/src/soy/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.125 6.875C18.125 6.375 18.0437 5.875 17.8844 5.4L16.5 1.25H14.9969C14.9969 3.70312 3.7 15 1.24687 15V16.5031L5.39687 17.8875C5.87187 18.0469 6.36875 18.1281 6.87187 18.1281C8.48125 18.1281 10.2312 16.5281 10.5625 14.9062C12.8 15.5063 15.5 12.8063 14.9031 10.5656C16.525 10.2344 18.125 8.48438 18.125 6.875ZM6.875 16.25C6.25 16.25 5.625 15.625 5.625 15C5.625 14.0594 6.55937 13.125 7.5 13.125C8.125 13.125 8.75 13.75 8.75 14.375C8.75 15.3156 7.81562 16.25 6.875 16.25ZM11.25 13.125C10.625 13.125 10 12.5 10 11.875C10 10.9344 10.9344 10 11.875 10C12.5 10 13.125 10.625 13.125 11.25C13.125 12.1906 12.1906 13.125 11.25 13.125ZM14.375 8.75C13.75 8.75 13.125 8.125 13.125 7.5C13.125 6.55937 14.0594 5.625 15 5.625C15.625 5.625 16.25 6.25 16.25 6.875C16.25 7.81563 15.3156 8.75 14.375 8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var soyIcon = createIcon("soy", iconDefinition);
export {
  soyIcon,
  iconDefinition
};
