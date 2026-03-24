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
// src/noticons/src/movieCamera/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.9375 6.25C15.9375 4.17812 14.2594 2.5 12.1875 2.5C10.65 2.5 9.32812 3.42813 8.75 4.75312C8.17188 3.42813 6.85 2.5 5.3125 2.5C3.24062 2.5 1.5625 4.17812 1.5625 6.25C1.5625 7.99687 2.75937 9.45938 4.375 9.87813V16.875H13.125V9.87813C14.7406 9.4625 15.9375 7.99687 15.9375 6.25ZM5.3125 8.125C4.27813 8.125 3.4375 7.28438 3.4375 6.25C3.4375 5.21563 4.27813 4.375 5.3125 4.375C6.34688 4.375 7.1875 5.21563 7.1875 6.25C7.1875 7.28438 6.34688 8.125 5.3125 8.125ZM12.1875 8.125C11.1531 8.125 10.3125 7.28438 10.3125 6.25C10.3125 5.21563 11.1531 4.375 12.1875 4.375C13.2219 4.375 14.0625 5.21563 14.0625 6.25C14.0625 7.28438 13.2219 8.125 12.1875 8.125ZM18.125 9.375V16.875H16.875L14.375 14.375V11.875L16.875 9.375H18.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var movieCameraIcon = createIcon("movieCamera", iconDefinition);
export {
  movieCameraIcon,
  iconDefinition
};
