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
// src/noticons/src/_123/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.02124 8.28125C7.02124 7.45282 7.69281 6.78125 8.52124 6.78125C9.34967 6.78125 10.0212 7.45282 10.0212 8.28125V8.3679C10.0212 8.7626 9.87412 9.14314 9.60862 9.43519L5.55249 13.8969V15.0938H11.8962V13.2188H8.70301L10.996 10.6965C11.5753 10.0593 11.8962 9.22904 11.8962 8.3679V8.28125C11.8962 6.41729 10.3852 4.90625 8.52124 4.90625C6.65728 4.90625 5.14624 6.41729 5.14624 8.28125V8.4375H7.02124V8.28125Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M14.6418 8.15898C14.6418 7.3984 15.2598 6.78125 16.0056 6.78125H16.2288C16.8587 6.78125 17.3694 7.29192 17.3694 7.92188C17.3694 8.55182 16.8587 9.0625 16.2288 9.0625H15.4896V10.9375H16.2288C16.8587 10.9375 17.3694 11.4482 17.3694 12.0781C17.3694 12.7081 16.8587 13.2188 16.2288 13.2188H16.0056C15.2598 13.2188 14.6418 12.6016 14.6418 11.841H12.7668C12.7668 13.6224 14.2095 15.0938 16.0056 15.0938H16.2288C17.8943 15.0938 19.2444 13.7436 19.2444 12.0781C19.2444 11.2726 18.9286 10.5409 18.4141 10C18.9286 9.45909 19.2444 8.72736 19.2444 7.92188C19.2444 6.25639 17.8943 4.90625 16.2288 4.90625H16.0056C14.2095 4.90625 12.7668 6.37763 12.7668 8.15898H14.6418Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M0.755615 6.51562L2.23999 5.03125H4.11499L4.11499 15.0938H2.23999L2.23999 7.61445H0.755615V6.51562Z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var _123Icon = createIcon("_123", iconDefinition);
export {
  iconDefinition,
  _123Icon
};
