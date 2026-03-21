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

// src/nds-icons/src/rectangleExpandVertical/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M9.381 1.101a.875.875 0 0 1 1.238 0l2.5 2.5A.875.875 0 0 1 11.88 4.84l-.981-.982v2.868a.875.875 0 1 1-1.75 0V3.808l-1.031 1.03A.875.875 0 1 1 6.88 3.602zM7.5 5.875h-3A2.375 2.375 0 0 0 2.125 8.25v3.5A2.375 2.375 0 0 0 4.5 14.125h3v-1.75h-3a.625.625 0 0 1-.625-.625v-3.5c0-.345.28-.625.625-.625h3zm5 6.5h3c.345 0 .625-.28.625-.625v-3.5a.625.625 0 0 0-.625-.625h-3v-1.75h3a2.375 2.375 0 0 1 2.375 2.375v3.5a2.375 2.375 0 0 1-2.375 2.375h-3zm-3.119 6.519-2.5-2.5a.875.875 0 1 1 1.238-1.238l.981.982v-2.863a.875.875 0 0 1 1.75 0v2.912l1.031-1.03a.875.875 0 1 1 1.238 1.237l-2.5 2.5a.875.875 0 0 1-1.238 0"
  }, undefined, false, undefined, this)
};
var rectangleExpandVerticalFillIcon = createIcon("rectangleExpandVerticalFill", iconDefinition);
export {
  rectangleExpandVerticalFillIcon,
  iconDefinition
};
