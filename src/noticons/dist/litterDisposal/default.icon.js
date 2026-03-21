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
// src/noticons/src/litterDisposal/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M4.6875 3.75C4.6875 2.78438 5.28437 2.1875 6.25 2.1875C7.21562 2.1875 7.8125 2.78438 7.8125 3.75C7.8125 4.71563 7.21562 5.3125 6.25 5.3125C5.28437 5.3125 4.6875 4.71563 4.6875 3.75ZM7.8125 7.8125H11.875V6.25H6.25C4.26875 6.25 3.3875 6.90312 2.67812 8.32187L1.5625 10.55L2.95938 11.25L4.19375 8.78438C4.3125 8.54688 4.45 8.4375 4.6875 8.4375V10.9375L2.5 17.5H4.475L6.25 12.1781L8.025 17.5H10L7.8125 10.9375V7.8125ZM15.625 7.5L14.375 6.25L13.125 7.5L14.375 8.75L15.625 7.5ZM18.125 10L16.875 17.5H11.875L10.625 10H18.125ZM15.3125 15L14.0625 13.75L12.8125 15L14.0625 16.25L15.3125 15ZM16.25 12.1875C16.25 11.6687 15.8313 11.25 15.3125 11.25C14.7937 11.25 14.375 11.6687 14.375 12.1875C14.375 12.7063 14.7937 13.125 15.3125 13.125C15.8313 13.125 16.25 12.7063 16.25 12.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var litterDisposalIcon = createIcon("litterDisposal", iconDefinition);
export {
  litterDisposalIcon,
  iconDefinition
};
