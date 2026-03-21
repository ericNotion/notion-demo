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

// src/nds-icons/src/arrowUpDownLeftRight/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10.442 1.908a.625.625 0 0 0-.884 0L7.083 4.383a.625.625 0 1 0 .884.884l1.408-1.408v5.516H3.859l1.408-1.408a.625.625 0 0 0-.884-.884L1.908 9.558a.625.625 0 0 0 0 .884l2.475 2.475a.625.625 0 1 0 .884-.884l-1.408-1.408h5.516v5.516l-1.408-1.408a.625.625 0 1 0-.884.884l2.475 2.475c.244.244.64.244.884 0l2.475-2.475a.625.625 0 1 0-.884-.884l-1.408 1.408v-5.516h5.516l-1.408 1.408a.625.625 0 1 0 .884.884l2.475-2.475a.625.625 0 0 0 0-.884l-2.475-2.475a.625.625 0 1 0-.884.884l1.408 1.408h-5.516V3.859l1.408 1.408a.625.625 0 0 0 .884-.884z"
  }, undefined, false, undefined, this)
};
var arrowUpDownLeftRightIcon = createIcon("arrowUpDownLeftRight", iconDefinition);
export {
  iconDefinition,
  arrowUpDownLeftRightIcon
};
