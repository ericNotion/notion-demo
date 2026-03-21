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

// src/nds-icons/src/arrowCircleLoopSlash/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 21 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m5.7 3.487-.607-.706a.875.875 0 0 0-1.329 1.138l.607.708A7.85 7.85 0 0 0 2.254 10v.547l-.76-.76a.875.875 0 1 0-1.238 1.238l2.254 2.254a.875.875 0 0 0 1.238 0L6 11.025a.875.875 0 0 0-1.237-1.237l-.76.76V10c0-1.545.572-2.956 1.515-4.033l7.891 9.206a6.1 6.1 0 0 1-3.281.952 6.1 6.1 0 0 1-4.168-1.636.875.875 0 1 0-1.191 1.282 7.85 7.85 0 0 0 5.359 2.104 7.84 7.84 0 0 0 4.43-1.363l.605.707a.875.875 0 0 0 1.33-1.139l-.608-.707.001-.001-1.148-1.34v.001L6.846 4.827h.002zm9.782 9.491 1.196 1.396A7.84 7.84 0 0 0 18.004 10v-.547l.76.76A.875.875 0 1 0 20 8.975l-2.254-2.254a.875.875 0 0 0-1.237 0l-2.254 2.254a.875.875 0 0 0 1.237 1.238l.76-.76V10a6.1 6.1 0 0 1-.77 2.978M8.004 4.254 6.807 2.858a7.85 7.85 0 0 1 3.322-.733c2.069 0 3.954.8 5.358 2.104a.875.875 0 0 1-1.19 1.282 6.1 6.1 0 0 0-4.168-1.636 6.1 6.1 0 0 0-2.125.379"
  }, undefined, false, undefined, this)
};
var arrowCircleLoopSlashFillIcon = createIcon("arrowCircleLoopSlashFill", iconDefinition);
export {
  iconDefinition,
  arrowCircleLoopSlashFillIcon
};
