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
// src/noticons/src/thumbsUp/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.3156 12.4156C16.475 12.6438 16.5625 12.9344 16.5625 13.2812C16.5625 14.15 16.025 14.6875 15.1562 14.6875H14.9625C15.0875 14.9031 15.1562 15.1625 15.1562 15.4688C15.1562 16.3375 14.6187 16.875 13.75 16.875H8.68125C7.8125 16.875 7.22188 16.7344 6.44375 16.3469L5 15.625H3.125V9.375H5.3125L7.5 5V1.875H8.125C9.28125 1.875 10 2.59375 10 3.75V7.5H15.4688C16.3375 7.5 16.875 8.0375 16.875 8.90625C16.875 9.30625 16.7563 9.63438 16.5469 9.875C16.9531 10.1031 17.1875 10.525 17.1875 11.0938C17.1875 11.7656 16.8625 12.2344 16.3156 12.4156Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var thumbsUpIcon = createIcon("thumbsUp", iconDefinition);
export {
  thumbsUpIcon,
  iconDefinition
};
