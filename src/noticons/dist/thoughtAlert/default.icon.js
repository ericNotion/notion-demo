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
// src/noticons/src/thoughtAlert/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M5.3125 16.0938C5.3125 16.8719 4.68438 17.5 3.90625 17.5C3.12812 17.5 2.5 16.8719 2.5 16.0938C2.5 15.3156 3.12812 14.6875 3.90625 14.6875C4.68438 14.6875 5.3125 15.3156 5.3125 16.0938ZM18.125 11.25C18.125 13.6656 16.1656 15.625 13.75 15.625C13.4375 15.625 13.1344 15.5906 12.8406 15.5281C12.0437 16.3562 10.9281 16.875 9.6875 16.875C7.70312 16.875 6.03125 15.5531 5.49375 13.7437C3.48438 13.675 1.875 12.0281 1.875 10C1.875 8.48125 2.77813 7.17812 4.07812 6.5875C4.22813 3.95937 6.4 1.875 9.0625 1.875C10.4469 1.875 11.6969 2.4375 12.6031 3.34375C12.9594 3.20312 13.3438 3.125 13.75 3.125C15.475 3.125 16.875 4.525 16.875 6.25C16.875 6.82188 16.7188 7.35313 16.4531 7.8125C17.4688 8.6125 18.125 9.85313 18.125 11.25ZM11.25 12.1875H8.75V14.0625H11.25V12.1875ZM11.25 4.6875H8.75V8.4375L9.375 10.9375H10.625L11.25 8.4375V4.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var thoughtAlertIcon = createIcon("thoughtAlert", iconDefinition);
export {
  thoughtAlertIcon,
  iconDefinition
};
