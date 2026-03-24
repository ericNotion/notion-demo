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
// src/noticons/src/throat/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M11.0125 10.0625L14.9281 11.0406L14.8219 11.6813C14.7344 12.1969 14.3969 12.4969 13.9313 12.4969C13.8375 12.4969 13.7375 12.4844 13.6344 12.4594L11.875 12.0187V13.1219L13.4719 16.3125C13.6563 16.6813 13.75 17.0844 13.75 17.4969H10.625V10.3625C10.625 10.1594 10.8156 10.0094 11.0125 10.0594V10.0625ZM16.1469 8.95L14.9875 7.40313C14.9906 7.33125 14.9969 7.25938 14.9969 7.1875C14.9969 4.6 12.8969 2.5 10.3094 2.5C7.72189 2.5 5.62189 4.6 5.62189 7.1875C5.62189 8.98438 6.63439 10.5469 8.12189 11.3312V13.4375C6.24689 14.375 4.99689 15.7937 4.99689 17.5H9.37189V10.1188C9.37189 9.3625 9.98439 8.75 10.7406 8.75C10.8531 8.75 10.9625 8.7625 11.0719 8.79062L15.1313 9.80625L15.9094 9.6125C16.125 9.55938 16.2438 9.40625 16.2438 9.23125C16.2438 9.14063 16.2125 9.04375 16.1438 8.95312L16.1469 8.95Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var throatIcon = createIcon("throat", iconDefinition);
export {
  throatIcon,
  iconDefinition
};
