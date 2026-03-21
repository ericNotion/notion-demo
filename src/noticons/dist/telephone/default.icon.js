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
// src/noticons/src/telephone/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M11.875 12.5C11.875 13.3625 11.0344 14.0625 10 14.0625C8.96562 14.0625 8.125 13.3625 8.125 12.5C8.125 11.6375 8.96562 10.9375 10 10.9375C11.0344 10.9375 11.875 11.6375 11.875 12.5ZM10 2.5C6.09062 2.5 1.875 3.52188 1.875 6.15625V7.5H6.25V5.625C6.60313 5.32188 8.0375 4.6875 10 4.6875C11.9625 4.6875 13.3969 5.32188 13.75 5.625V7.5H18.125V6.15625C18.125 3.50313 13.8813 2.5 10 2.5ZM15 8.75L17.5 16.25V17.5H2.5V16.25L5 8.75H7.5V6.875H12.5V8.75H15ZM13.75 12.5C13.75 10.775 12.0719 9.375 10 9.375C7.92812 9.375 6.25 10.775 6.25 12.5C6.25 14.225 7.92812 15.625 10 15.625C12.0719 15.625 13.75 14.225 13.75 12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var telephoneIcon = createIcon("telephone", iconDefinition);
export {
  telephoneIcon,
  iconDefinition
};
