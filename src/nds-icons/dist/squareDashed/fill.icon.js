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

// src/nds-icons/src/squareDashed/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M5.25 4.625a.625.625 0 0 0-.625.625v.99a.875.875 0 1 1-1.75 0v-.99A2.375 2.375 0 0 1 5.25 2.875h.99a.875.875 0 1 1 0 1.75zm2.885-.875c0-.483.392-.875.875-.875h1.98a.875.875 0 0 1 0 1.75H9.01a.875.875 0 0 1-.875-.875m4.75 0c0-.483.392-.875.875-.875h.99a2.375 2.375 0 0 1 2.375 2.375v.99a.875.875 0 0 1-1.75 0v-.99a.625.625 0 0 0-.625-.625h-.99a.875.875 0 0 1-.875-.875m3.365 4.385c.483 0 .875.392.875.875v1.98a.875.875 0 0 1-1.75 0V9.01c0-.483.392-.875.875-.875m-12.5 0c.483 0 .875.392.875.875v1.98a.875.875 0 0 1-1.75 0V9.01c0-.483.392-.875.875-.875m12.5 4.75c.483 0 .875.392.875.875v.99a2.375 2.375 0 0 1-2.375 2.375h-.99a.875.875 0 0 1 0-1.75h.99c.345 0 .625-.28.625-.625v-.99c0-.483.392-.875.875-.875m-12.5 0c.483 0 .875.392.875.875v.99c0 .345.28.625.625.625h.99a.875.875 0 0 1 0 1.75h-.99a2.375 2.375 0 0 1-2.375-2.375v-.99c0-.483.392-.875.875-.875m4.385 3.365c0-.483.392-.875.875-.875h1.98a.875.875 0 0 1 0 1.75H9.01a.875.875 0 0 1-.875-.875"
  }, undefined, false, undefined, this)
};
var squareDashedFillIcon = createIcon("squareDashedFill", iconDefinition);
export {
  squareDashedFillIcon,
  iconDefinition
};
