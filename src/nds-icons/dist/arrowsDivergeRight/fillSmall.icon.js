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

// src/nds-icons/src/arrowsDivergeRight/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M13.65 3.754a.75.75 0 0 1 0 1.06l-1.98 1.98a.75.75 0 0 1-1.06-1.06l.697-.698H9.581a2.45 2.45 0 0 0-1.733.718L6.011 7.592q-.224.225-.478.408.255.183.478.408l1.837 1.838a2.45 2.45 0 0 0 1.733.718h1.726l-.697-.698a.75.75 0 1 1 1.06-1.06l1.98 1.98a.75.75 0 0 1 0 1.06l-1.98 1.98a.75.75 0 0 1-1.06-1.06l.702-.702h-1.73a3.95 3.95 0 0 1-2.795-1.158L4.95 9.468a2.45 2.45 0 0 0-1.723-.718H2.08a.75.75 0 1 1 0-1.5h1.147a2.45 2.45 0 0 0 1.723-.718l1.837-1.838a3.95 3.95 0 0 1 2.794-1.158h1.731l-.702-.702a.75.75 0 1 1 1.06-1.06z"
  }, undefined, false, undefined, this)
};
var arrowsDivergeRightFillSmallIcon = createIcon("arrowsDivergeRightFillSmall", iconDefinition);
export {
  iconDefinition,
  arrowsDivergeRightFillSmallIcon
};
