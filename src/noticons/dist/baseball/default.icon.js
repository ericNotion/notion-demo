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
// src/noticons/src/baseball/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M12.5 10C12.5 12.225 13.4 14.2438 14.8563 15.7156C13.5469 16.8281 11.8531 17.5 10 17.5C8.14687 17.5 6.45312 16.8281 5.14375 15.7156C6.6 14.2469 7.5 12.2281 7.5 10C7.5 7.77187 6.6 5.75625 5.14375 4.28437C6.45312 3.17188 8.14687 2.5 10 2.5C11.8531 2.5 13.5469 3.17188 14.8563 4.28437C13.4 5.75312 12.5 7.77187 12.5 10ZM4.2625 5.17187C3.1625 6.47812 2.5 8.15938 2.5 10C2.5 11.8406 3.1625 13.525 4.2625 14.8281C5.49063 13.5844 6.25 11.8813 6.25 10C6.25 8.11875 5.49063 6.4125 4.2625 5.17187ZM15.7375 5.17187C14.5094 6.41562 13.75 8.11875 13.75 10C13.75 11.8813 14.5094 13.5875 15.7375 14.8281C16.8375 13.5219 17.5 11.8406 17.5 10C17.5 8.15938 16.8375 6.475 15.7375 5.17187Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var baseballIcon = createIcon("baseball", iconDefinition);
export {
  iconDefinition,
  baseballIcon
};
