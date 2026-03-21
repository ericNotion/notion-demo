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

// src/nds-icons/src/arrowsDivergeRight/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M16.837 5.797a.625.625 0 0 0 0-.884l-2.475-2.475a.625.625 0 0 0-.883.884l1.41 1.41h-2.917A4.63 4.63 0 0 0 8.7 6.089L6.404 8.386c-.63.63-1.485.986-2.377.99H2.595a.625.625 0 0 0 0 1.25h1.432a3.38 3.38 0 0 1 2.377.988L8.7 13.912a4.63 4.63 0 0 0 3.272 1.355h2.917l-1.41 1.411a.625.625 0 1 0 .883.884l2.475-2.475a.625.625 0 0 0 0-.884l-2.475-2.475a.625.625 0 1 0-.883.884l1.405 1.405h-2.912a3.38 3.38 0 0 1-2.388-.989L7.288 10.73a4.6 4.6 0 0 0-.95-.73c.344-.2.664-.444.95-.73l2.296-2.298a3.38 3.38 0 0 1 2.388-.99h2.912l-1.405 1.406a.625.625 0 1 0 .883.884z"
  }, undefined, false, undefined, this)
};
var arrowsDivergeRightIcon = createIcon("arrowsDivergeRight", iconDefinition);
export {
  iconDefinition,
  arrowsDivergeRightIcon
};
