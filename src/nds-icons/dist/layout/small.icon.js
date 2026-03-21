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

// src/nds-icons/src/layout/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M3.74 2.375c-.754 0-1.365.611-1.365 1.366v8.518c0 .755.611 1.366 1.366 1.366h2.592c.755 0 1.366-.611 1.366-1.366V3.741c0-.755-.611-1.366-1.366-1.366zm-.115 1.366c0-.064.052-.116.116-.116h2.592c.064 0 .116.052.116.116v8.518a.116.116 0 0 1-.116.116H3.741a.116.116 0 0 1-.116-.116zm6.042-1.366c-.755 0-1.366.611-1.366 1.366v2.592c0 .755.611 1.366 1.366 1.366h2.592c.755 0 1.366-.611 1.366-1.366V3.741c0-.755-.611-1.366-1.366-1.366zM9.55 3.741c0-.064.052-.116.116-.116h2.592c.064 0 .116.052.116.116v2.592a.116.116 0 0 1-.116.116H9.667a.116.116 0 0 1-.116-.116zm.117 4.56h2.592c.755 0 1.366.611 1.366 1.366v2.592c0 .755-.611 1.366-1.366 1.366H9.667A1.366 1.366 0 0 1 8.3 12.26V9.667c0-.755.611-1.366 1.366-1.366M9.55 9.667v2.592c0 .064.052.116.116.116h2.592a.116.116 0 0 0 .116-.116V9.667a.116.116 0 0 0-.116-.116H9.667a.116.116 0 0 0-.116.116"
  }, undefined, false, undefined, this)
};
var layoutSmallIcon = createIcon("layoutSmall", iconDefinition);
export {
  layoutSmallIcon,
  iconDefinition
};
