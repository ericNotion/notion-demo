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
// src/noticons/src/poo/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.625 11.875H15.3125V9.6875C15.3125 8.53125 14.5938 7.8125 13.4375 7.8125H13.125V6.25C13.125 3.9375 11.6875 2.5 9.375 2.5H8.75V5.3125L6.38125 6.49688C5.43438 6.96875 5 7.675 5 8.73438V11.2531L3.88125 11.8125C2.93438 12.2844 2.5 12.9906 2.5 14.05V17.5063H17.5V13.7563C17.5 12.6 16.7812 11.8813 15.625 11.8813V11.875ZM6.875 11.5625V10.3125C6.875 9.73438 7.23438 9.375 7.8125 9.375C8.39062 9.375 8.75 9.73438 8.75 10.3125V11.5625C8.75 12.1406 8.39062 12.5 7.8125 12.5C7.23438 12.5 6.875 12.1406 6.875 11.5625ZM10 15.625C8.96562 15.625 8.125 14.925 8.125 14.0625H11.875C11.875 14.925 11.0344 15.625 10 15.625ZM13.125 11.5625C13.125 12.1406 12.7656 12.5 12.1875 12.5C11.6094 12.5 11.25 12.1406 11.25 11.5625V10.3125C11.25 9.73438 11.6094 9.375 12.1875 9.375C12.7656 9.375 13.125 9.73438 13.125 10.3125V11.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pooIcon = createIcon("poo", iconDefinition);
export {
  pooIcon,
  iconDefinition
};
