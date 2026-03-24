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
// src/noticons/src/inlineSkate/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.75 14.6875C18.75 15.8969 17.7719 16.875 16.5625 16.875C15.6906 16.875 14.9406 16.3625 14.5875 15.625H14.1594C13.8094 16.3625 13.0562 16.875 12.1844 16.875C11.3125 16.875 10.5625 16.3625 10.2094 15.625H9.78123C9.43123 16.3625 8.6781 16.875 7.80623 16.875C6.93435 16.875 6.18435 16.3625 5.83123 15.625H5.4031C5.0531 16.3625 4.29998 16.875 3.4281 16.875C2.21873 16.875 1.2406 15.8969 1.2406 14.6875C1.2406 13.8156 1.7531 13.0656 2.4906 12.7125V8.45C2.4906 7.76563 2.54685 7.29688 2.7156 6.63125L3.1156 5.02813V2.5H9.3656V5.625L14.3656 10L17.4906 10.7812V12.7125C18.2281 13.0625 18.7406 13.8156 18.7406 14.6875H18.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var inlineSkateIcon = createIcon("inlineSkate", iconDefinition);
export {
  inlineSkateIcon,
  iconDefinition
};
