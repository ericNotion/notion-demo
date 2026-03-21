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

// src/nds-icons/src/textFormat/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    fillRule: "evenodd",
    d: "m8.619 12.6 1.064 2.878a.875.875 0 1 0 1.641-.607L7.587 4.76a1.238 1.238 0 0 0-2.323 0L1.526 14.87a.875.875 0 1 0 1.642.607L4.232 12.6zm-.647-1.75L6.425 6.664 4.878 10.85zm9.681-2.381c.483 0 .875.391.875.875v5.83a.875.875 0 0 1-1.706.275c-.571.387-1.26.6-2.004.6-.967 0-1.872-.366-2.533-1.056-.662-.69-1.031-1.653-1.031-2.765s.37-2.065 1.04-2.743c.667-.675 1.572-1.016 2.524-1.016.723 0 1.42.196 2.009.585a.875.875 0 0 1 .826-.585m-4.65 3.76c0-.718.232-1.207.536-1.514.306-.31.747-.496 1.28-.496s.981.187 1.294.5c.309.309.543.797.543 1.51 0 1.371-.861 2.07-1.838 2.07-.518 0-.957-.19-1.27-.517-.311-.325-.544-.836-.544-1.554",
    clipRule: "evenodd"
  }, undefined, false, undefined, this)
};
var textFormatFillIcon = createIcon("textFormatFill", iconDefinition);
export {
  textFormatFillIcon,
  iconDefinition
};
