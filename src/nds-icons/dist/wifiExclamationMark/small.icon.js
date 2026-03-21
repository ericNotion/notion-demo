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

// src/nds-icons/src/wifiExclamationMark/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8 2.303a.575.575 0 0 0-.575.575v6.4a.575.575 0 1 0 1.15 0v-6.4A.575.575 0 0 0 8 2.303m1.26 1.005-.085-.01v1.26l.064.01a7.83 7.83 0 0 1 4.353 2.21.625.625 0 0 0 .884-.884A9.07 9.07 0 0 0 9.26 3.308M6.825 4.574V3.31l-.086.013a9.08 9.08 0 0 0-5.15 2.606.625.625 0 0 0 .89.879 7.83 7.83 0 0 1 4.283-2.224zM9.264 5.79l-.089-.016v1.273l.059.013a5.4 5.4 0 0 1 2.626 1.45.625.625 0 0 0 .884-.884 6.64 6.64 0 0 0-3.48-1.836M6.825 7.07V5.791l-.09.018a6.64 6.64 0 0 0-3.378 1.816.625.625 0 1 0 .884.884 5.4 5.4 0 0 1 2.527-1.427zm2.447 1.242-.097-.03v.996q0 .128-.026.248l-.013.06.057.025c.351.149.668.365.935.631a.625.625 0 1 0 .884-.884 4.2 4.2 0 0 0-1.74-1.046m-2.447.966V8.31l-.099.033A4.2 4.2 0 0 0 5.09 9.358a.625.625 0 0 0 .884.884c.244-.244.53-.445.846-.592l.056-.026-.015-.06a1.2 1.2 0 0 1-.035-.286m1.224 1.967a1.075 1.075 0 1 0 0 2.15 1.075 1.075 0 0 0 0-2.15"
  }, undefined, false, undefined, this)
};
var wifiExclamationMarkSmallIcon = createIcon("wifiExclamationMarkSmall", iconDefinition);
export {
  wifiExclamationMarkSmallIcon,
  iconDefinition
};
