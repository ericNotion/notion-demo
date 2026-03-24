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
// src/noticons/src/paintBucket/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M19.375 11.1438V13.4375C19.375 14.0156 19.0156 14.375 18.4375 14.375C17.8594 14.375 17.5 14.0156 17.5 13.4375V11.1438C17.5 10.4031 17.2906 9.9 16.7687 9.375L13.125 5.73125L13.4375 5.41875C13.7375 5.11875 14.025 5 14.45 5C14.875 5 15.1625 5.11875 15.4625 5.41875L18.0906 8.04688C19.0063 8.9625 19.3719 9.84375 19.3719 11.1406L19.375 11.1438ZM8.75 3.125L15.625 10L7.5 18.125L0.625 11.25L5.5875 6.2875L2.5 3.2L3.825 1.875L6.9125 4.9625L8.75 3.125ZM8.75 9.0625C8.75 9.58125 9.16875 10 9.6875 10C10.2063 10 10.625 9.58125 10.625 9.0625C10.625 8.54375 10.2063 8.125 9.6875 8.125C9.16875 8.125 8.75 8.54375 8.75 9.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var paintBucketIcon = createIcon("paintBucket", iconDefinition);
export {
  paintBucketIcon,
  iconDefinition
};
