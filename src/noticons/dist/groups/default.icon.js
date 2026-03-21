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
// src/noticons/src/groups/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M20 15H16.25C16.25 13.4062 15.8125 12.05 15.0281 11.0125C15.3156 10.9625 15.6187 10.9375 15.9375 10.9375C18.4438 10.9375 20 12.4937 20 15ZM4.0625 10C5.4125 10 6.25 9.1625 6.25 7.8125C6.25 6.4625 5.4125 5.625 4.0625 5.625C2.7125 5.625 1.875 6.4625 1.875 7.8125C1.875 9.1625 2.7125 10 4.0625 10ZM15.9375 10C17.2875 10 18.125 9.1625 18.125 7.8125C18.125 6.4625 17.2875 5.625 15.9375 5.625C14.5875 5.625 13.75 6.4625 13.75 7.8125C13.75 9.1625 14.5875 10 15.9375 10ZM10 8.75C11.5437 8.75 12.5 7.79375 12.5 6.25C12.5 4.70625 11.5437 3.75 10 3.75C8.45625 3.75 7.5 4.70625 7.5 6.25C7.5 7.79375 8.45625 8.75 10 8.75ZM10 10C6.91563 10 5 11.9156 5 15H15C15 11.9156 13.0844 10 10 10ZM0 15H3.75C3.75 13.4062 4.1875 12.05 4.97188 11.0125C4.68437 10.9625 4.38125 10.9375 4.0625 10.9375C1.55625 10.9375 0 12.4937 0 15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var groupsIcon = createIcon("groups", iconDefinition);
export {
  iconDefinition,
  groupsIcon
};
