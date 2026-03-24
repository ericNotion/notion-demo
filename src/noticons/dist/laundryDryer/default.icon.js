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
// src/noticons/src/laundryDryer/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M9.12812 11.575C8.91562 11.925 8.75 12.2 8.75 12.55C8.75 13.1844 9.32188 13.4938 9.34688 13.5063L8.78438 14.6219C8.30625 14.3844 7.5 13.6812 7.5 12.55C7.5 11.8531 7.80938 11.3406 8.05938 10.9281C8.27188 10.5781 8.4375 10.3031 8.4375 9.95312C8.4375 9.38125 7.80313 8.975 7.79375 8.97187L8.45 7.90625C8.5 7.9375 9.6875 8.67813 9.6875 9.95312C9.6875 10.65 9.37812 11.1625 9.12812 11.575ZM16.25 2.5V17.5H3.75V2.5H16.25ZM14.375 11.25C14.375 8.83437 12.4156 6.875 10 6.875C7.58437 6.875 5.625 8.83437 5.625 11.25C5.625 13.6656 7.58437 15.625 10 15.625C12.4156 15.625 14.375 13.6656 14.375 11.25ZM14.375 5.3125C14.375 4.79375 13.9563 4.375 13.4375 4.375C12.9187 4.375 12.5 4.79375 12.5 5.3125C12.5 5.83125 12.9187 6.25 13.4375 6.25C13.9563 6.25 14.375 5.83125 14.375 5.3125ZM12.5 9.95C12.5 8.675 11.3156 7.93438 11.2625 7.90313L10.6062 8.96875C10.6062 8.96875 11.25 9.38125 11.25 9.95C11.25 10.3 11.0844 10.575 10.8719 10.925C10.6219 11.3375 10.3125 11.85 10.3125 12.5469C10.3125 13.6781 11.1188 14.3844 11.5969 14.6187L12.1594 13.5031C12.1344 13.4906 11.5625 13.1813 11.5625 12.5469C11.5625 12.1969 11.7281 11.9219 11.9406 11.5719C12.1906 11.1594 12.5 10.6469 12.5 9.95Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var laundryDryerIcon = createIcon("laundryDryer", iconDefinition);
export {
  laundryDryerIcon,
  iconDefinition
};
