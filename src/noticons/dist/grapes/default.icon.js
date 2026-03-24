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
// src/noticons/src/grapes/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.5 12.1875C17.5 13.3938 16.5188 14.375 15.3125 14.375C14.975 14.375 14.6562 14.2969 14.3687 14.1594C14.3187 15.3219 13.3594 16.25 12.1875 16.25C11.5031 16.25 10.8906 15.9344 10.4906 15.4375C10.1844 16.275 9.38125 16.875 8.4375 16.875C7.75313 16.875 7.14062 16.5594 6.74062 16.0625C6.43437 16.9 5.63125 17.5 4.6875 17.5C3.48125 17.5 2.5 16.5188 2.5 15.3125C2.5 14.3719 3.1 13.5688 3.9375 13.2594C3.44375 12.8594 3.125 12.2469 3.125 11.5625C3.125 10.6219 3.725 9.81875 4.5625 9.50938C4.06875 9.10938 3.75 8.49687 3.75 7.8125C3.75 6.6375 4.68125 5.68125 5.84063 5.63125C5.70313 5.34688 5.625 5.02813 5.625 4.6875C5.625 3.48125 6.60625 2.5 7.8125 2.5C8.9125 2.5 9.82188 3.31562 9.975 4.375C10.3031 4.17813 10.6844 4.0625 11.0938 4.0625C12.0844 4.0625 12.9187 4.72187 13.1906 5.625C13.6094 4.91875 14.0625 3.84687 14.0625 2.5L15.9375 3.125C15.9375 4.6875 14.9625 6.00313 14.2313 6.775C15.2063 6.99375 15.9375 7.86562 15.9375 8.90625C15.9375 9.31563 15.8219 9.69688 15.625 10.025C16.6812 10.1781 17.5 11.0875 17.5 12.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var grapesIcon = createIcon("grapes", iconDefinition);
export {
  iconDefinition,
  grapesIcon
};
