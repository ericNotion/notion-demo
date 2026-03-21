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

// src/nds-icons/src/squareGrid2X2/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4 3.375c-.897 0-1.625.728-1.625 1.625v2.5c0 .897.728 1.625 1.625 1.625h3.5c.897 0 1.625-.728 1.625-1.625V5c0-.897-.728-1.625-1.625-1.625zm0 7.5c-.897 0-1.625.727-1.625 1.625V15c0 .898.728 1.625 1.625 1.625h3.5c.897 0 1.625-.727 1.625-1.625v-2.5c0-.898-.728-1.625-1.625-1.625zm8.5-7.5c-.898 0-1.625.728-1.625 1.625v2.5c0 .897.727 1.625 1.625 1.625H16c.898 0 1.625-.728 1.625-1.625V5c0-.897-.727-1.625-1.625-1.625zm0 7.5c-.898 0-1.625.727-1.625 1.625V15c0 .898.727 1.625 1.625 1.625H16c.898 0 1.625-.727 1.625-1.625v-2.5c0-.898-.727-1.625-1.625-1.625z"
  }, undefined, false, undefined, this)
};
var squareGrid2X2FillIcon = createIcon("squareGrid2X2Fill", iconDefinition);
export {
  squareGrid2X2FillIcon,
  iconDefinition
};
