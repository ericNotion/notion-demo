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
// src/noticons/src/fryingPan/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M11.25 2.5C7.79688 2.5 5.00001 5.29688 5.00001 8.75C5.00001 9.79375 5.25938 10.775 5.70938 11.6375L3.11251 14.2344C2.29376 15.0531 2.29376 16.0688 3.11251 16.8875C3.93126 17.7063 4.94688 17.7063 5.76563 16.8875L8.36251 14.2906C9.22813 14.7406 10.2094 15 11.25 15C14.7031 15 17.5 12.2031 17.5 8.75C17.5 5.29688 14.7031 2.5 11.25 2.5ZM15 10.625C15 11.6594 14.1594 12.5 13.125 12.5C12.0906 12.5 12.0313 11.875 11.25 11.875C10.4688 11.875 10.4094 12.5 9.37501 12.5C8.34063 12.5 7.50001 11.6594 7.50001 10.625C7.50001 9.59062 8.12501 9.53125 8.12501 8.75C8.12501 7.96875 7.50001 7.90938 7.50001 6.875C7.50001 5.84063 8.34063 5 9.37501 5C10.4094 5 10.4688 5.625 11.25 5.625C12.0313 5.625 12.0906 5 13.125 5C14.1594 5 15 5.84063 15 6.875C15 7.90938 14.375 7.96875 14.375 8.75C14.375 9.53125 15 9.59062 15 10.625ZM12.8125 8.75C12.8125 9.6125 12.1125 10.3125 11.25 10.3125C10.3875 10.3125 9.68751 9.6125 9.68751 8.75C9.68751 7.8875 10.3875 7.1875 11.25 7.1875C12.1125 7.1875 12.8125 7.8875 12.8125 8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fryingPanIcon = createIcon("fryingPan", iconDefinition);
export {
  iconDefinition,
  fryingPanIcon
};
