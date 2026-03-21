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

// src/nds-icons/src/magicWand/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10.75 3a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM8.293 8.293a1 1 0 0 1 1.414 0l.897.896-1.372 1.372-.04.045-.9-.899a1 1 0 0 1 0-1.414m1.602 3.015 6.649 6.65a1 1 0 0 0 1.414-1.415l-6.646-6.647-1.372 1.372zM10.75 15a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm-3.755-1.995a.75.75 0 0 1 0 1.06L5.58 15.48a.75.75 0 1 1-1.06-1.06l1.413-1.415a.75.75 0 0 1 1.06 0M15.48 4.52a.75.75 0 0 1 0 1.06l-1.414 1.415a.75.75 0 1 1-1.06-1.06l1.413-1.415a.75.75 0 0 1 1.061 0M5.75 10a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75m12 0a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75M6.995 6.995a.75.75 0 0 1-1.06 0L4.52 5.58a.75.75 0 0 1 1.06-1.06l1.415 1.414a.75.75 0 0 1 0 1.06"
  }, undefined, false, undefined, this)
};
var magicWandFillIcon = createIcon("magicWandFill", iconDefinition);
export {
  magicWandFillIcon,
  iconDefinition
};
