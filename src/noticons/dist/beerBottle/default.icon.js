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
// src/noticons/src/beerBottle/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M7.31563 6.025L6.95312 3.125H7.5V1.25H3.75V3.125H4.29688L3.93438 6.025C3.025 6.525 2.5 7.47813 2.5 8.75V16.25C2.5 17.0219 2.97812 17.5 3.75 17.5H7.5C8.27187 17.5 8.75 17.0219 8.75 16.25V8.75C8.75 7.475 8.225 6.525 7.31563 6.025ZM6.875 13.75H4.375V9.375H6.875V13.75ZM15.9375 13.75C15.9375 11.875 18.125 11.25 18.125 6.875C18.125 4.375 16.875 2.5 16.875 2.5H11.25C11.25 2.5 10 4.375 10 6.875C10 11.25 12.1875 11.875 12.1875 13.75C12.1875 15 10.9375 15.625 10.9375 15.625V17.5H17.1875V15.625C17.1875 15.625 15.9375 15 15.9375 13.75ZM12.3969 4.375H15.7312C15.9812 4.98125 16.2531 5.87187 16.2531 6.875H11.8781C11.8781 5.87187 12.1469 4.98438 12.4 4.375H12.3969Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var beerBottleIcon = createIcon("beerBottle", iconDefinition);
export {
  iconDefinition,
  beerBottleIcon
};
