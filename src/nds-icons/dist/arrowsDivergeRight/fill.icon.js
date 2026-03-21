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

// src/nds-icons/src/arrowsDivergeRight/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m14.54 2.261 2.474 2.475a.875.875 0 0 1 0 1.238L14.54 8.449a.875.875 0 1 1-1.237-1.238l.978-.978h-2.308c-.83 0-1.625.33-2.21.916L7.464 9.446q-.308.308-.662.554.354.246.662.554L9.76 12.85a3.13 3.13 0 0 0 2.21.916h2.31l-.98-.978a.875.875 0 1 1 1.238-1.238l2.475 2.475a.875.875 0 0 1 0 1.238l-2.475 2.475a.875.875 0 1 1-1.237-1.238l.984-.984h-2.314a4.88 4.88 0 0 1-3.449-1.429L6.226 11.79a3.13 3.13 0 0 0-2.21-.916H2.595a.875.875 0 0 1 0-1.75h1.422c.829 0 1.624-.33 2.21-.916L8.523 5.91a4.88 4.88 0 0 1 3.449-1.428h2.314l-.984-.984a.875.875 0 0 1 1.237-1.238"
  }, undefined, false, undefined, this)
};
var arrowsDivergeRightFillIcon = createIcon("arrowsDivergeRightFill", iconDefinition);
export {
  iconDefinition,
  arrowsDivergeRightFillIcon
};
