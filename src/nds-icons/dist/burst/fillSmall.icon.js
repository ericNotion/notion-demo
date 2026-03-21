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

// src/nds-icons/src/burst/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.75 2.5a.75.75 0 0 0-1.5 0v1.964a.75.75 0 0 0 1.5 0zm3.67 2.141a.75.75 0 0 0-1.061-1.06L9.969 4.97a.75.75 0 0 0 1.061 1.06zM14.25 8a.75.75 0 0 1-.75.75h-1.964a.75.75 0 0 1 0-1.5H13.5a.75.75 0 0 1 .75.75m-2.891 4.42a.75.75 0 1 0 1.06-1.061l-1.389-1.39a.75.75 0 0 0-1.06 1.061zM8 14.25a.75.75 0 0 1-.75-.75v-1.964a.75.75 0 0 1 1.5 0V13.5a.75.75 0 0 1-.75.75m-4.42-2.891a.75.75 0 0 0 1.061 1.06l1.39-1.389A.75.75 0 0 0 4.97 9.97zM1.75 8a.75.75 0 0 1 .75-.75h1.964a.75.75 0 0 1 0 1.5H2.5A.75.75 0 0 1 1.75 8m2.892-4.42A.75.75 0 0 0 3.58 4.642l1.389 1.39A.75.75 0 0 0 6.03 4.97z"
  }, undefined, false, undefined, this)
};
var burstFillSmallIcon = createIcon("burstFillSmall", iconDefinition);
export {
  iconDefinition,
  burstFillSmallIcon
};
