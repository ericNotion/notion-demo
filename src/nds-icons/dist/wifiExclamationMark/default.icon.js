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

// src/nds-icons/src/wifiExclamationMark/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10.625 3.597a.625.625 0 1 0-1.25 0v8a.625.625 0 1 0 1.25 0zm1.1 1.983V4.315a11.2 11.2 0 0 1 6.26 3.163.625.625 0 0 1-.884.884 9.94 9.94 0 0 0-5.376-2.782m-3.45-1.246a11.2 11.2 0 0 0-6.177 3.187.625.625 0 1 0 .889.879 9.95 9.95 0 0 1 5.288-2.798zm0 3.119a8.14 8.14 0 0 0-3.969 2.19.625.625 0 1 0 .884.884A6.9 6.9 0 0 1 8.275 8.74zm3.45-.027v1.282a6.9 6.9 0 0 1 3.21 1.82.625.625 0 1 0 .884-.885 8.14 8.14 0 0 0-4.094-2.217m-3.45 3.218a5.1 5.1 0 0 0-1.804 1.165.625.625 0 0 0 .884.884 3.9 3.9 0 0 1 .965-.704 1.7 1.7 0 0 1-.045-.392zm3.45.953q0 .172-.033.336c.402.19.767.448 1.078.76a.625.625 0 1 0 .884-.884 5.1 5.1 0 0 0-1.93-1.21zm-1.662 2.553a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
  }, undefined, false, undefined, this)
};
var wifiExclamationMarkIcon = createIcon("wifiExclamationMark", iconDefinition);
export {
  wifiExclamationMarkIcon,
  iconDefinition
};
