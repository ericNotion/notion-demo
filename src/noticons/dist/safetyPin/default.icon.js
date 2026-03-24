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
// src/noticons/src/safetyPin/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.75 2.5C12.7906 2.5 11.8312 2.86563 11.0969 3.59688L3.59688 11.0969C2.86563 11.8281 2.5 12.7875 2.5 13.75C2.5 15.8219 4.17812 17.5 6.25 17.5C7.20937 17.5 8.16875 17.1344 8.90312 16.4031L16.4031 8.90312C17.1344 8.17188 17.5 7.2125 17.5 6.25C17.5 4.17812 15.8219 2.5 13.75 2.5ZM6.25 15.625C5.21563 15.625 4.375 14.7844 4.375 13.75C4.375 12.7156 5.21563 11.875 6.25 11.875C7.28438 11.875 8.125 12.7156 8.125 13.75C8.125 14.7844 7.28438 15.625 6.25 15.625ZM13.6969 7.5H13.1281C12.3 7.5 11.7125 8.13125 11.7125 8.69688C11.7125 8.825 11.7375 8.95937 11.7844 9.10312L12.225 10.4281L9.86875 12.7844C9.52187 11.4937 8.50625 10.4781 7.21562 10.1312L9.57187 7.775C9.71562 7.82187 9.85 7.84688 9.97813 7.84688C10.2562 7.84688 10.5 7.73438 10.7312 7.50313L12.8656 5.36875C13.1094 5.125 13.4281 5.00313 13.75 5.00313C14.4406 5.00313 15 5.5625 15 6.25313C15 7.14687 14.1813 7.50313 13.6969 7.50313V7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var safetyPinIcon = createIcon("safetyPin", iconDefinition);
export {
  safetyPinIcon,
  iconDefinition
};
