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
// src/noticons/src/sandwich/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.5625 7.1875H3.4375V5.3125C3.4375 4.54062 3.91562 4.0625 4.6875 4.0625H15.3125C16.0844 4.0625 16.5625 4.54062 16.5625 5.3125V7.1875ZM16.5625 8.4375H15.0969C14.3563 8.4375 13.8531 8.64687 13.3281 9.16875L12.1844 10.3125L11.0406 9.16875C10.5156 8.64375 10.0125 8.4375 9.27187 8.4375H3.4375C2.66562 8.4375 2.1875 8.91563 2.1875 9.6875V10.3125C2.1875 11.0844 2.66562 11.5625 3.4375 11.5625H16.5625C17.3344 11.5625 17.8125 11.0844 17.8125 10.3125V9.6875C17.8125 8.91563 17.3344 8.4375 16.5625 8.4375ZM3.4375 14.6875C3.4375 15.4594 3.91562 15.9375 4.6875 15.9375H15.3125C16.0844 15.9375 16.5625 15.4594 16.5625 14.6875V12.8125H3.4375V14.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sandwichIcon = createIcon("sandwich", iconDefinition);
export {
  sandwichIcon,
  iconDefinition
};
