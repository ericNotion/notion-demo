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
// src/noticons/src/infinity/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M14.6875 5.3125C12.5156 5.3125 11.1375 6.75625 10 8.3375C8.8625 6.75313 7.48438 5.3125 5.3125 5.3125C2.72812 5.3125 0.625 7.41562 0.625 10C0.625 12.5844 2.72812 14.6875 5.3125 14.6875C7.48438 14.6875 8.8625 13.2438 10 11.6625C11.1375 13.2469 12.5156 14.6875 14.6875 14.6875C17.2719 14.6875 19.375 12.5844 19.375 10C19.375 7.41562 17.2719 5.3125 14.6875 5.3125ZM5.3125 12.8125C3.7625 12.8125 2.5 11.55 2.5 10C2.5 8.45 3.7625 7.1875 5.3125 7.1875C6.8625 7.1875 7.81875 8.44375 8.87187 10C7.81875 11.5563 6.83125 12.8125 5.3125 12.8125ZM14.6875 12.8125C13.1687 12.8125 12.1813 11.5563 11.1281 10C12.1813 8.44375 13.1687 7.1875 14.6875 7.1875C16.2063 7.1875 17.5 8.45 17.5 10C17.5 11.55 16.2375 12.8125 14.6875 12.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var infinityIcon = createIcon("infinity", iconDefinition);
export {
  infinityIcon,
  iconDefinition
};
