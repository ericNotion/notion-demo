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
// src/noticons/src/viewOff/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M8.53437 5.88125L7.05312 4.4C7.95312 4.00312 8.9375 3.75 10.0031 3.75C15.3375 3.75 18.7531 10 18.7531 10C18.7531 10 17.7875 11.7687 16.0781 13.425L14.1219 11.4688C14.2844 11.0094 14.3781 10.5187 14.3781 10.0031C14.3781 7.5875 12.4187 5.62813 10.0031 5.62813C9.4875 5.62813 8.99687 5.72187 8.5375 5.88438L8.53437 5.88125ZM10 14.375C7.58437 14.375 5.625 12.4156 5.625 10C5.625 9.48438 5.71875 8.99375 5.88125 8.53437L3.925 6.57812C2.21875 8.23438 1.25 10.0031 1.25 10.0031C1.25 10.0031 4.66563 16.2531 10 16.2531C11.0625 16.2531 12.05 16.0031 12.95 15.6031L11.4688 14.1219C11.0094 14.2844 10.5187 14.3781 10.0031 14.3781L10 14.375ZM1.875 2.75937L17.2406 18.125L18.125 17.2406L2.75937 1.875L1.875 2.75937Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var viewOffIcon = createIcon("viewOff", iconDefinition);
export {
  viewOffIcon,
  iconDefinition
};
