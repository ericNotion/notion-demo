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
// src/noticons/src/cloudOff/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M8.27187 5.62187L6.92188 4.27187C7.8625 3.53125 9.11875 3.125 10.6219 3.125C14.0938 3.125 16.2469 5.27813 16.2469 8.75V8.85C17.8094 9.1875 18.7469 10.4 18.7469 12.1875C18.7469 13.3875 18.325 14.3312 17.5719 14.925L16.2156 13.5687C16.6594 13.3406 16.8719 12.8938 16.8719 12.1875C16.8719 11.1062 16.3906 10.625 15.3094 10.625H14.3719V8.75C14.3719 6.33125 13.0406 5 10.6219 5C9.65938 5 8.87187 5.21563 8.26875 5.62187H8.27187ZM1.875 2.75937L17.2406 18.125L18.125 17.2406L2.75937 1.875L1.875 2.75937ZM5.3125 13.75C3.84063 13.75 3.125 13.0344 3.125 11.5625C3.125 10.0906 3.84063 9.375 5.3125 9.375H6.72188L4.86562 7.51875C2.62187 7.69375 1.25 9.20937 1.25 11.5625C1.25 14.0688 2.80625 15.625 5.3125 15.625H12.9719L11.0969 13.75H5.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cloudOffIcon = createIcon("cloudOff", iconDefinition);
export {
  iconDefinition,
  cloudOffIcon
};
