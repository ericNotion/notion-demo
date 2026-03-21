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
// src/noticons/src/longBone/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.75 7.6063C18.75 8.5813 17.9594 9.37505 16.9812 9.37505C16.4344 9.37505 15.9469 9.12817 15.625 8.74067C15.625 7.65942 14.7656 6.87505 13.7812 6.87505C13.2937 6.87505 12.8219 7.0688 12.4781 7.41567L6.98125 12.9125C6.45625 13.4375 6.25 13.9407 6.25 14.6813V15.6282C6.25 16.4 5.77187 16.8782 5 16.8782C4.22813 16.8782 3.75 16.4 3.75 15.6282V14.3782H2.5C1.72812 14.3782 1.25 13.9 1.25 13.1282C1.25 12.3563 1.72812 11.8782 2.5 11.8782H3.44687C4.1875 11.8782 4.69063 11.6688 5.21563 11.1469L12.6094 3.75317C13.0562 3.3063 13.4875 3.12817 14.1187 3.12817C14.75 3.12817 15.1812 3.3063 15.6281 3.75317L15.6812 3.8063C15.4375 4.05005 15.3156 4.3688 15.3156 4.69067C15.3156 5.3813 15.875 5.94067 16.5656 5.94067C16.8844 5.94067 17.2063 5.8188 17.45 5.57505L18.2344 6.35942C18.5656 6.69067 18.7531 7.14067 18.7531 7.60942L18.75 7.6063Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var longBoneIcon = createIcon("longBone", iconDefinition);
export {
  longBoneIcon,
  iconDefinition
};
