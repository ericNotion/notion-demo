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

// src/nds-icons/src/squareGrid2X2/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M3.2 2.65A1.35 1.35 0 0 0 1.85 4v2c0 .746.605 1.35 1.35 1.35H6A1.35 1.35 0 0 0 7.35 6V4A1.35 1.35 0 0 0 6 2.65zm0 6A1.35 1.35 0 0 0 1.85 10v2c0 .746.605 1.35 1.35 1.35H6A1.35 1.35 0 0 0 7.35 12v-2A1.35 1.35 0 0 0 6 8.65zm6.8-6A1.35 1.35 0 0 0 8.65 4v2c0 .746.604 1.35 1.35 1.35h2.8A1.35 1.35 0 0 0 14.15 6V4a1.35 1.35 0 0 0-1.35-1.35zm0 6A1.35 1.35 0 0 0 8.65 10v2c0 .746.604 1.35 1.35 1.35h2.8A1.35 1.35 0 0 0 14.15 12v-2a1.35 1.35 0 0 0-1.35-1.35z"
  }, undefined, false, undefined, this)
};
var squareGrid2X2FillSmallIcon = createIcon("squareGrid2X2FillSmall", iconDefinition);
export {
  squareGrid2X2FillSmallIcon,
  iconDefinition
};
