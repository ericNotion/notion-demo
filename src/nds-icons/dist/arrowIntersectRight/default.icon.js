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

// src/nds-icons/src/arrowIntersectRight/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m14.867 3.268 2.475 2.475a.625.625 0 0 1 0 .884l-2.475 2.475a.625.625 0 0 1-.884-.884l1.405-1.405h-1.727a3.38 3.38 0 0 0-2.883 1.62L9.825 10l.953 1.566a3.38 3.38 0 0 0 2.883 1.621h1.727l-1.405-1.405a.625.625 0 0 1 .884-.884l2.475 2.475a.625.625 0 0 1 0 .884l-2.475 2.475a.625.625 0 1 1-.884-.884l1.411-1.41h-1.733a4.63 4.63 0 0 1-3.951-2.222l-.617-1.013-.618 1.016a4.63 4.63 0 0 1-3.951 2.22H3.1a.625.625 0 1 1 0-1.25h1.424a3.38 3.38 0 0 0 2.883-1.62L8.362 10l-.955-1.569a3.38 3.38 0 0 0-2.883-1.62H3.1a.625.625 0 0 1 0-1.25h1.424c1.614 0 3.112.841 3.951 2.22l.618 1.017.617-1.014a4.63 4.63 0 0 1 3.951-2.221h1.733l-1.41-1.41a.625.625 0 0 1 .883-.885"
  }, undefined, false, undefined, this)
};
var arrowIntersectRightIcon = createIcon("arrowIntersectRight", iconDefinition);
export {
  iconDefinition,
  arrowIntersectRightIcon
};
