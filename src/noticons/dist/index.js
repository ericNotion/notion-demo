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
var ICON_SIZE_MOBILE = {
  xxs: 14,
  xs: 16,
  sm: 18,
  default: 22,
  lg: 26,
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
function createIconGroup(iconGroupName, variants, searchTerms) {
  return {
    name: iconGroupName,
    variants,
    searchTerms
  };
}

// src/nds-icons/Icon.tsx
"use client";
function Icon({
  className,
  icon,
  style,
  size = "default",
  color = "primary",
  weight = "regular"
}) {
  const iconSize = typeof size === "number" ? size : ICON_SIZE[size];
  const iconColor = color === "inherit" ? "inherit" : color === "currentColor" ? "currentColor" : color === "white" ? "#ffffff" : `var(--icon-color-${color.replace(/([A-Z])/g, "-$1").toLowerCase()})`;
  const styles = {
    width: iconSize,
    height: iconSize,
    fill: iconColor,
    stroke: weight === "bold" ? iconColor : undefined,
    strokeWidth: weight === "bold" ? 0.3 : undefined,
    ...style
  };
  return icon(styles, className);
}
export {
  createIconGroup,
  createIcon,
  SvgIcon,
  Icon,
  ICON_SIZE_MOBILE,
  ICON_SIZE_FOR_VARIANT,
  ICON_SIZE
};
