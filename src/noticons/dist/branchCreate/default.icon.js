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
// src/noticons/src/branchCreate/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M14.375 11.25C13.8531 11.25 13.3625 11.3781 12.9313 11.6062L8.39375 7.06875C8.61875 6.6375 8.75 6.14687 8.75 5.625C8.75 3.9 7.35 2.5 5.625 2.5C3.9 2.5 2.5 3.9 2.5 5.625C2.5 7.025 3.41875 8.20938 4.6875 8.60625V11.3937C3.41875 11.7906 2.5 12.975 2.5 14.375C2.5 16.1 3.9 17.5 5.625 17.5C7.35 17.5 8.75 16.1 8.75 14.375C8.75 12.975 7.83125 11.7906 6.5625 11.3937V8.60625C6.7375 8.55 6.90625 8.47813 7.06875 8.39375L11.6062 12.9313C11.3812 13.3625 11.25 13.8531 11.25 14.375C11.25 16.1 12.65 17.5 14.375 17.5C16.1 17.5 17.5 16.1 17.5 14.375C17.5 12.65 16.1 11.25 14.375 11.25ZM5.625 4.375C6.31562 4.375 6.875 4.93438 6.875 5.625C6.875 6.31562 6.31562 6.875 5.625 6.875C4.93438 6.875 4.375 6.31562 4.375 5.625C4.375 4.93438 4.93438 4.375 5.625 4.375ZM5.625 15.625C4.93438 15.625 4.375 15.0656 4.375 14.375C4.375 13.6844 4.93438 13.125 5.625 13.125C6.31562 13.125 6.875 13.6844 6.875 14.375C6.875 15.0656 6.31562 15.625 5.625 15.625ZM14.375 15.625C13.6844 15.625 13.125 15.0656 13.125 14.375C13.125 13.6844 13.6844 13.125 14.375 13.125C15.0656 13.125 15.625 13.6844 15.625 14.375C15.625 15.0656 15.0656 15.625 14.375 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var branchCreateIcon = createIcon("branchCreate", iconDefinition);
export {
  iconDefinition,
  branchCreateIcon
};
