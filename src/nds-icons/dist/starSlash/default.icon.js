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

// src/nds-icons/src/starSlash/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m4.897 3.085-.122-.142a.625.625 0 0 0-.95.814l3.18 3.71h-3.98a.625.625 0 0 0-.367 1.13L6.6 11.462l-1.506 4.636a.625.625 0 0 0 .962.699L10 13.932l3.943 2.865a.625.625 0 0 0 .903-.183l1.215 1.418a.625.625 0 1 0 .95-.814l-.495-.576a.6.6 0 0 1-.127-.113l-11.4-13.3a.6.6 0 0 1-.093-.144m.051 5.632h3.129l5.018 5.853.027.085-2.755-2.001a.625.625 0 0 0-.734 0l-2.755 2 1.052-3.237a.625.625 0 0 0-.227-.7zm8.633 2.613 3.762-2.733a.625.625 0 0 0-.367-1.13H12.1L10.594 2.83a.625.625 0 0 0-1.188 0L8.55 5.463l.953 1.112L10 5.046l1.052 3.239a.625.625 0 0 0 .595.432h3.404l-2.287 1.662z"
  }, undefined, false, undefined, this)
};
var starSlashIcon = createIcon("starSlash", iconDefinition);
export {
  starSlashIcon,
  iconDefinition
};
