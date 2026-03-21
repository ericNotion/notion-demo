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

// src/nds-icons/src/listNumber/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.126 2.326a.55.55 0 0 1 .271.474V6a.55.55 0 1 1-1.1 0V3.735l-.03.016a.55.55 0 1 1-.534-.961l.847-.47a.55.55 0 0 1 .546.006M6.8 4.175a.625.625 0 1 0 0 1.25h6a.625.625 0 1 0 0-1.25zm0 6.4a.625.625 0 1 0 0 1.25h6a.625.625 0 1 0 0-1.25zm-2 2.775h-2a.55.55 0 0 1-.417-.908L3.92 10.65a.44.44 0 0 0 .107-.288.16.16 0 0 0-.126-.155l-.13-.027a.3.3 0 0 0-.149.002l-.023.005a.35.35 0 0 0-.259.266.55.55 0 1 1-1.08-.206c.109-.555.53-.996 1.08-1.129l.024-.005c.208-.05.425-.054.634-.01l.131.028c.582.123.998.637.998 1.231 0 .369-.132.725-.372 1.004l-.759.884H4.8a.55.55 0 0 1 0 1.1"
  }, undefined, false, undefined, this)
};
var listNumberFillSmallIcon = createIcon("listNumberFillSmall", iconDefinition);
export {
  listNumberFillSmallIcon,
  iconDefinition
};
