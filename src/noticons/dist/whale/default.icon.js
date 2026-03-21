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
// src/noticons/src/whale/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.125 3.125H11.875V1.875H13.125C14.2469 1.875 15 2.62813 15 3.75V3.8375C15.1906 3.78125 15.4 3.75 15.625 3.75H16.875V5H15.625C15.2 5 15 5.2 15 5.625V6.25H13.75V3.75C13.75 3.325 13.55 3.125 13.125 3.125ZM18.75 7.5V10C18.75 12.8906 17.0688 14.7531 14.3219 14.9781C14.05 16.55 12.6875 17.5 10.625 17.5V16.25L11.5969 15H7.5C4.41563 15 2.5 13.0844 2.5 10V6.00937C1.31875 5.5125 0.625 4.25938 0.625 2.5H1.875L3.775 3.97812L5.625 2.5H6.875C6.875 4.25938 6.18125 5.50937 5 6.00937V6.25C5 7.02187 5.47813 7.5 6.25 7.5H18.75ZM14.375 10.3125C14.375 9.79375 13.9563 9.375 13.4375 9.375C12.9187 9.375 12.5 9.79375 12.5 10.3125C12.5 10.8313 12.9187 11.25 13.4375 11.25C13.9563 11.25 14.375 10.8313 14.375 10.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var whaleIcon = createIcon("whale", iconDefinition);
export {
  whaleIcon,
  iconDefinition
};
