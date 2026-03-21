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
// src/noticons/src/trafficLight/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.875 5V3.75H13.75V2.5H6.25V3.75H3.125V5L6.25 6.5625V8.125H3.125V9.375L6.25 10.9375V12.5H3.125V13.75L6.25 15.3125V17.5H13.75V15.3125L16.875 13.75V12.5H13.75V10.9375L16.875 9.375V8.125H13.75V6.5625L16.875 5ZM10 15.9375C9.1375 15.9375 8.4375 15.2375 8.4375 14.375C8.4375 13.5125 9.1375 12.8125 10 12.8125C10.8625 12.8125 11.5625 13.5125 11.5625 14.375C11.5625 15.2375 10.8625 15.9375 10 15.9375ZM10 11.5625C9.1375 11.5625 8.4375 10.8625 8.4375 10C8.4375 9.1375 9.1375 8.4375 10 8.4375C10.8625 8.4375 11.5625 9.1375 11.5625 10C11.5625 10.8625 10.8625 11.5625 10 11.5625ZM10 7.1875C9.1375 7.1875 8.4375 6.4875 8.4375 5.625C8.4375 4.7625 9.1375 4.0625 10 4.0625C10.8625 4.0625 11.5625 4.7625 11.5625 5.625C11.5625 6.4875 10.8625 7.1875 10 7.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var trafficLightIcon = createIcon("trafficLight", iconDefinition);
export {
  trafficLightIcon,
  iconDefinition
};
