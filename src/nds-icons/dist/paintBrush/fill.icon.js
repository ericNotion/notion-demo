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

// src/nds-icons/src/paintBrush/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M9.737 2.472a1.325 1.325 0 0 1 2.015-.166l2.88 2.88a4.62 4.62 0 0 1-1.351 3.15l-.074.073c-.121.121.003.323.166.269l.742-.247a3.47 3.47 0 0 0 1.641-1.162l.42-.54 1.331 1.332c.58.579.5 1.539-.167 2.015l-3.28 2.343-6.666-6.666zM6.172 6.087l7.569 7.569-.978.977a2.325 2.325 0 0 1-3.288 0l-.813-.813-1.164 1.63c-.256.36-.546.767-.89 1.095-.35.336-.78.612-1.32.673a2.42 2.42 0 0 1-1.986-.693 2.42 2.42 0 0 1-.693-1.985c.062-.54.337-.97.673-1.321.328-.343.736-.633 1.096-.89l1.63-1.164-.814-.813a2.325 2.325 0 0 1 0-3.288zm-.686 8.254a.669.669 0 1 0-.946.946.669.669 0 0 0 .946-.946"
  }, undefined, false, undefined, this)
};
var paintBrushFillIcon = createIcon("paintBrushFill", iconDefinition);
export {
  paintBrushFillIcon,
  iconDefinition
};
