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
// src/noticons/src/slidersHorizontal/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M6.5625 7.1875C5.3375 7.1875 4.3 7.97188 3.9125 9.0625H2.5V10.9375H3.9125C4.3 12.0281 5.3375 12.8125 6.5625 12.8125C7.7875 12.8125 8.825 12.0281 9.2125 10.9375H17.5V9.0625H9.2125C8.825 7.97188 7.7875 7.1875 6.5625 7.1875ZM6.5625 10.9375C6.04375 10.9375 5.625 10.5188 5.625 10C5.625 9.48125 6.04375 9.0625 6.5625 9.0625C7.08125 9.0625 7.5 9.48125 7.5 10C7.5 10.5188 7.08125 10.9375 6.5625 10.9375ZM10.9375 12.8125C9.7125 12.8125 8.675 13.5969 8.2875 14.6875H2.5V16.5625H8.2875C8.675 17.6531 9.7125 18.4375 10.9375 18.4375C12.1625 18.4375 13.2 17.6531 13.5875 16.5625H17.5V14.6875H13.5875C13.2 13.5969 12.1625 12.8125 10.9375 12.8125ZM10.9375 16.5625C10.4187 16.5625 10 16.1438 10 15.625C10 15.1062 10.4187 14.6875 10.9375 14.6875C11.4563 14.6875 11.875 15.1062 11.875 15.625C11.875 16.1438 11.4563 16.5625 10.9375 16.5625ZM16.0875 3.4375C15.7 2.34688 14.6625 1.5625 13.4375 1.5625C12.2125 1.5625 11.175 2.34688 10.7875 3.4375H2.5V5.3125H10.7875C11.175 6.40312 12.2125 7.1875 13.4375 7.1875C14.6625 7.1875 15.7 6.40312 16.0875 5.3125H17.5V3.4375H16.0875ZM13.4375 5.3125C12.9187 5.3125 12.5 4.89375 12.5 4.375C12.5 3.85625 12.9187 3.4375 13.4375 3.4375C13.9563 3.4375 14.375 3.85625 14.375 4.375C14.375 4.89375 13.9563 5.3125 13.4375 5.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var slidersHorizontalIcon = createIcon("slidersHorizontal", iconDefinition);
export {
  slidersHorizontalIcon,
  iconDefinition
};
