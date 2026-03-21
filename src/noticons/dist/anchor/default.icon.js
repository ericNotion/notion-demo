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
// src/noticons/src/anchor/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M14.375 12.1875V12.5344C14.375 13.9062 13.875 14.7156 12.6469 15.3281L10.9375 16.1844V10.3125H14.375V8.4375H10.9375V6.70937C12.0281 6.32187 12.8125 5.28125 12.8125 4.0625C12.8125 2.5125 11.55 1.25 10 1.25C8.45 1.25 7.1875 2.5125 7.1875 4.0625C7.1875 5.28438 7.97188 6.325 9.0625 6.70937V8.4375H5.625V10.3125H9.0625V16.1844L7.35313 15.3281C6.125 14.7156 5.625 13.9062 5.625 12.5344V12.1875H3.75V12.5344C3.75 14.6125 4.65313 16.075 6.5125 17.0062L10 18.75L13.4875 17.0062C15.3469 16.075 16.25 14.6125 16.25 12.5344V12.1875H14.375ZM10 3.125C10.5156 3.125 10.9375 3.54688 10.9375 4.0625C10.9375 4.57812 10.5156 5 10 5C9.48438 5 9.0625 4.57812 9.0625 4.0625C9.0625 3.54688 9.48438 3.125 10 3.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var anchorIcon = createIcon("anchor", iconDefinition);
export {
  iconDefinition,
  anchorIcon
};
