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

// src/nds-icons/src/magicWand/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.625 2.4a.625.625 0 1 0-1.25 0V4a.625.625 0 1 0 1.25 0zM6.67 6.67a.75.75 0 0 1 1.06 0l.717.717-1.06 1.06-.717-.717a.75.75 0 0 1 0-1.06m1.282 2.343 5.318 5.317a.75.75 0 0 0 1.06-1.06L9.013 7.953zM8.625 12a.625.625 0 0 0-1.25 0v1.6a.625.625 0 1 0 1.25 0zm-3.011-1.614a.625.625 0 0 1 0 .884l-1.132 1.132a.625.625 0 0 1-.884-.884l1.132-1.132a.625.625 0 0 1 .884 0m6.788-6.788a.625.625 0 0 1 0 .884L11.27 5.613a.625.625 0 1 1-.883-.884l1.13-1.13a.625.625 0 0 1 .885 0M4.625 8c0 .345-.28.625-.625.625H2.4a.625.625 0 1 1 0-1.25H4c.345 0 .625.28.625.625m9.6 0c0 .345-.28.625-.625.625H12a.625.625 0 1 1 0-1.25h1.6c.345 0 .625.28.625.625M5.613 5.613a.625.625 0 0 1-.884 0L3.6 4.483a.625.625 0 1 1 .883-.885l1.13 1.132a.625.625 0 0 1 0 .883"
  }, undefined, false, undefined, this)
};
var magicWandFillSmallIcon = createIcon("magicWandFillSmall", iconDefinition);
export {
  magicWandFillSmallIcon,
  iconDefinition
};
