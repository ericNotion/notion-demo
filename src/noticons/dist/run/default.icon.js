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
// src/noticons/src/run/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M10.9375 3.75C10.9375 2.78438 11.5344 2.1875 12.5 2.1875C13.4656 2.1875 14.0625 2.78438 14.0625 3.75C14.0625 4.71563 13.4656 5.3125 12.5 5.3125C11.5344 5.3125 10.9375 4.71563 10.9375 3.75ZM12.9719 8.98125C13.5875 9.7125 14.3562 10.625 16.25 10.625V9.0625C15.0813 9.0625 14.7188 8.63125 14.1656 7.975C13.5188 7.20625 12.7125 6.25 10.625 6.25C7.60938 6.25 5.88125 7.85312 4.6875 10.2375L6.08437 10.9375C6.95 9.20625 7.86875 8.33125 9.12812 7.99062L7.58125 11.0844C6.99063 12.2688 6.10938 12.8125 4.7875 12.8125H3.4375V14.6875H4.7875C6.88125 14.6875 8.28438 13.8313 9.22813 11.9812C10.0531 12.6062 12.5219 14.6781 13.2188 17.5L14.9969 16.9062C14.3063 14.1062 12.3281 12.0781 11.05 11.0156L12.3812 8.35625C12.5875 8.53437 12.7688 8.74687 12.9688 8.98438L12.9719 8.98125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var runIcon = createIcon("run", iconDefinition);
export {
  runIcon,
  iconDefinition
};
