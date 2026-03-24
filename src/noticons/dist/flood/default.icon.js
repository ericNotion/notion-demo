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
// src/noticons/src/flood/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.75 16.25C14.9312 16.25 15.6594 15 17.5 15V16.875C16.3188 16.875 15.5906 18.125 13.75 18.125C11.9094 18.125 11.2063 16.875 10 16.875C8.79375 16.875 8.09062 18.125 6.25 18.125C4.40938 18.125 3.70625 16.875 2.5 16.875V15C4.36562 15 5.04375 16.25 6.25 16.25C7.45625 16.25 8.15938 15 10 15C11.8406 15 12.5437 16.25 13.75 16.25ZM15.3125 7.1875V2.5H12.8125V4.6875L10 1.875L2.5 9.375V10.625H4.6875V14.25C4.9625 14.3812 5.20625 14.5187 5.42188 14.6406C5.82188 14.8687 6.05625 15 6.25 15C6.44375 15 6.725 14.8406 7.07812 14.6406C7.44375 14.4344 7.8875 14.1844 8.4375 14.0031V11.875H11.5625V14C12.1156 14.1812 12.5562 14.4312 12.9219 14.6406C13.3219 14.8687 13.5562 15 13.75 15C13.9438 15 14.225 14.8406 14.5781 14.6406C14.7938 14.5187 15.0375 14.3813 15.3125 14.2531V10.625H17.5V9.375L15.3125 7.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var floodIcon = createIcon("flood", iconDefinition);
export {
  iconDefinition,
  floodIcon
};
