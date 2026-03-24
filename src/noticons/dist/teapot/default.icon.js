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
// src/noticons/src/teapot/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.3 9.7125L16.0281 10.2531C15.5937 8.64063 14.5344 7.2875 13.1219 6.46875V4.375H10.9344V2.5H9.05937V4.375H6.87187V6.46875C6.54062 6.65938 6.23124 6.87812 5.94062 7.125C5.25624 5.85625 4.18437 5.625 3.58749 5.625C2.39062 5.625 0.618744 6.57188 0.618744 8.36563C0.618744 8.80938 0.731244 9.275 0.962494 9.74062L4.21562 16.25H15.1187L17.9687 10.55C18.2844 9.92187 18.6625 9.6875 19.3656 9.6875V7.8125C17.9562 7.8125 16.9219 8.45312 16.2906 9.7125H16.3ZM3.79062 11.1875L2.64687 8.90312C2.54999 8.70937 2.49999 8.53437 2.49999 8.37812C2.49999 7.82812 3.21249 7.5 3.59374 7.5C3.83749 7.5 4.10312 7.625 4.32187 8.0625L4.63124 8.68125C4.18437 9.43125 3.88749 10.2781 3.78749 11.1844L3.79062 11.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var teapotIcon = createIcon("teapot", iconDefinition);
export {
  teapotIcon,
  iconDefinition
};
