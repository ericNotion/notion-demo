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
// src/noticons/src/snowflake/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.3938 12.1907L14.9375 12.85L15.5969 15.3063L13.7875 15.7907L12.9875 12.8032L10.9406 11.6219V13.9844L13.1281 16.1719L11.8031 17.4969L10.0031 15.6969L8.20313 17.4969L6.87813 16.1719L9.06563 13.9844V11.6219L7.01875 12.8032L6.21875 15.7907L4.40938 15.3063L5.06875 12.85L2.6125 12.1907L3.09688 10.3813L6.08438 11.1813L8.13125 10L6.08438 8.8188L3.09688 9.6188L2.6125 7.80942L5.06875 7.15005L4.40938 4.6938L6.21875 4.20942L7.01875 7.19692L9.06563 8.37817V6.01567L6.87813 3.82817L8.20313 2.50317L10.0031 4.30317L11.8031 2.50317L13.1281 3.82817L10.9406 6.01567V8.37817L12.9875 7.19692L13.7875 4.20942L15.5969 4.6938L14.9375 7.15005L17.3938 7.80942L16.9094 9.6188L13.9219 8.8188L11.875 10L13.9219 11.1813L16.9094 10.3813L17.3938 12.1907Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var snowflakeIcon = createIcon("snowflake", iconDefinition);
export {
  snowflakeIcon,
  iconDefinition
};
