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

// src/nds-icons/src/sun/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  fittedViewBox: "1.05 1.05 13.91 13.9",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8 11.85a.75.75 0 0 1 .75.75v1.6a.75.75 0 0 1-1.5 0v-1.6a.75.75 0 0 1 .75-.75m-3.783-1.127a.75.75 0 0 1 1.06 1.06l-1.13 1.131a.751.751 0 0 1-1.062-1.06zm6.506 0a.75.75 0 0 1 1.06 0l1.131 1.13a.75.75 0 1 1-1.06 1.061l-1.131-1.13a.75.75 0 0 1 0-1.061M8 4.675a3.326 3.326 0 1 1 0 6.651 3.326 3.326 0 0 1 0-6.651M3.4 7.25a.75.75 0 1 1 0 1.5H1.8a.75.75 0 0 1 0-1.5zm10.8 0a.75.75 0 0 1 0 1.5h-1.6a.75.75 0 0 1 0-1.5zM3.086 3.086a.75.75 0 0 1 1.06 0l1.131 1.13a.75.75 0 0 1-1.06 1.061l-1.131-1.13a.75.75 0 0 1 0-1.061m8.768 0a.75.75 0 0 1 1.06 1.06l-1.13 1.131a.75.75 0 1 1-1.061-1.06zM8 1.05a.75.75 0 0 1 .75.75v1.6a.75.75 0 1 1-1.5 0V1.8A.75.75 0 0 1 8 1.05"
  }, undefined, false, undefined, this)
};
var sunFillSmallIcon = createIcon("sunFillSmall", iconDefinition, "fillSmall");
export {
  sunFillSmallIcon,
  iconDefinition
};
