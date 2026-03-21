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
// src/noticons/src/rain/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.875 9.375C16.875 10.5312 16.1562 11.25 15 11.25H5.625C4.08125 11.25 3.125 10.2937 3.125 8.75C3.125 7.42812 3.83125 6.5375 5.00313 6.30938C5.00313 6.29063 5.00313 6.26875 5.00313 6.25C5.00313 3.9375 6.44062 2.5 8.75313 2.5C10.5062 2.5 11.7563 3.325 12.2563 4.73438C12.4313 4.70312 12.6187 4.6875 12.8156 4.6875C14.3594 4.6875 15.3156 5.64375 15.3156 7.1875C15.3156 7.30312 15.3094 7.41563 15.2969 7.525C16.2781 7.64062 16.8781 8.32188 16.8781 9.375H16.875ZM6.09375 12.5L3.59375 17.5H4.84375L7.34375 12.5H6.09375ZM9.84375 12.5L7.34375 17.5H8.59375L11.0938 12.5H9.84375ZM11.0938 17.5H12.3438L14.8438 12.5H13.5938L11.0938 17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var rainIcon = createIcon("rain", iconDefinition);
export {
  rainIcon,
  iconDefinition
};
