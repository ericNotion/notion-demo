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

// src/nds-icons/src/textXYunderline/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M9.48 3.453a.625.625 0 0 0-1.04.694l2.222 3.333v2.54a.625.625 0 1 0 1.25 0V7.406l2.173-3.26a.625.625 0 1 0-1.04-.693l-1.782 2.674zm-6.036.027a.625.625 0 0 0-1.017.728l1.951 2.724-1.951 2.724a.625.625 0 1 0 1.016.728l1.704-2.379 1.704 2.379a.625.625 0 1 0 1.017-.728L5.916 6.932l1.951-2.724a.625.625 0 0 0-1.016-.728L5.147 5.858zM1.8 11.575a.625.625 0 0 0 0 1.25h.004a.625.625 0 0 0 0-1.25zm1.546 0a.625.625 0 0 0 0 1.25h.008a.625.625 0 0 0 0-1.25zm1.55 0a.625.625 0 0 0 0 1.25h.008a.625.625 0 0 0 0-1.25zm1.55 0a.625.625 0 0 0 0 1.25h.008a.625.625 0 0 0 0-1.25zm1.55 0a.625.625 0 0 0 0 1.25h.008a.625.625 0 0 0 0-1.25zm1.55 0a.625.625 0 0 0 0 1.25h.008a.625.625 0 0 0 0-1.25zm1.55 0a.625.625 0 0 0 0 1.25h.008a.625.625 0 0 0 0-1.25zm1.55 0a.625.625 0 0 0 0 1.25h.008a.625.625 0 0 0 0-1.25zm1.55 0a.625.625 0 0 0 0 1.25h.004a.625.625 0 0 0 0-1.25z"
  }, undefined, false, undefined, this)
};
var textXYunderlineSmallIcon = createIcon("textXYunderlineSmall", iconDefinition);
export {
  textXYunderlineSmallIcon,
  iconDefinition
};
