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
// src/noticons/src/violin/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.25 2.02187V19.375H14.375V0.625H15L15.5594 0.903125C16.0313 1.14062 16.25 1.49375 16.25 2.02187ZM12.1344 13.7188C12.3719 14.275 12.5 14.9125 12.5 15.6219C12.5 18.0156 11.0875 19.6 8.75 19.9312V16.2469H6.875V19.9312C4.5375 19.6031 3.125 18.0156 3.125 15.6219C3.125 14.9125 3.25313 14.275 3.49063 13.7188C4.43125 13.5813 5 12.9031 5 11.8719C5 10.9781 4.56562 10.35 3.8375 10.1094C3.78125 9.87813 3.75 9.63125 3.75 9.37187C3.75 7.69687 4.925 6.575 6.875 6.30938V2.49687H5.9375V0H9.6875V2.5H8.75V6.3125C10.7 6.57812 11.875 7.7 11.875 9.375C11.875 9.63437 11.8438 9.88125 11.7875 10.1125C11.0594 10.3531 10.625 10.9812 10.625 11.875C10.625 12.9031 11.1938 13.5813 12.1344 13.7219V13.7188ZM9.375 13.1219H6.25V14.3719H9.375V13.1219Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var violinIcon = createIcon("violin", iconDefinition);
export {
  violinIcon,
  iconDefinition
};
