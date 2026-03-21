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

// src/nds-icons/src/burst/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.625 2.5a.625.625 0 1 0-1.25 0v1.964a.625.625 0 1 0 1.25 0zm3.705 2.053a.625.625 0 0 0-.883-.884l-1.389 1.389a.625.625 0 0 0 .884.884zM14.125 8c0 .345-.28.625-.625.625h-1.964a.625.625 0 1 1 0-1.25H13.5c.345 0 .625.28.625.625m-2.678 4.331a.625.625 0 1 0 .884-.884l-1.39-1.389a.625.625 0 0 0-.883.884zM8 14.125a.625.625 0 0 1-.625-.625v-1.964a.625.625 0 1 1 1.25 0V13.5c0 .345-.28.625-.625.625m-4.33-2.678a.625.625 0 0 0 .883.884l1.389-1.389a.625.625 0 0 0-.884-.884zM1.875 8c0-.345.28-.625.625-.625h1.964a.625.625 0 1 1 0 1.25H2.5A.625.625 0 0 1 1.875 8m2.678-4.331a.625.625 0 1 0-.884.884l1.39 1.389a.625.625 0 1 0 .883-.884z"
  }, undefined, false, undefined, this)
};
var burstSmallIcon = createIcon("burstSmall", iconDefinition);
export {
  iconDefinition,
  burstSmallIcon
};
