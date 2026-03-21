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

// src/nds-icons/src/squareOnSquareDashed/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M3.09 2.55a.54.54 0 0 0-.54.54v.672a.55.55 0 1 1-1.1 0V3.09c0-.906.734-1.64 1.64-1.64h.672a.55.55 0 1 1 0 1.1zM5.028 2a.55.55 0 0 1 .55-.55h1.344a.55.55 0 0 1 0 1.1H5.578a.55.55 0 0 1-.55-.55m3.16 0a.55.55 0 0 1 .55-.55h.672c.906 0 1.64.734 1.64 1.64v.672a.55.55 0 0 1-1.1 0V3.09a.54.54 0 0 0-.54-.54h-.672a.55.55 0 0 1-.55-.55M2 5.028a.55.55 0 0 1 .55.55v1.344a.55.55 0 0 1-1.1 0V5.578a.55.55 0 0 1 .55-.55m0 3.16a.55.55 0 0 1 .55.55v.672c0 .298.242.54.54.54h.672a.55.55 0 0 1 0 1.1H3.09a1.64 1.64 0 0 1-1.64-1.64v-.672a.55.55 0 0 1 .55-.55M6.75 4.95a1.8 1.8 0 0 0-1.8 1.8v6a1.8 1.8 0 0 0 1.8 1.8h6a1.8 1.8 0 0 0 1.8-1.8v-6a1.8 1.8 0 0 0-1.8-1.8z"
  }, undefined, false, undefined, this)
};
var squareOnSquareDashedFillSmallIcon = createIcon("squareOnSquareDashedFillSmall", iconDefinition);
export {
  squareOnSquareDashedFillSmallIcon,
  iconDefinition
};
