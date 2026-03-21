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

// src/nds-icons/src/curlyBraces/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M5.846 2.75h.77a.75.75 0 1 0 0-1.5h-.77A2.75 2.75 0 0 0 3.096 4v1.223c0 .85-.487 1.634-1.252 2.016a.85.85 0 0 0 0 1.522 2.26 2.26 0 0 1 1.252 2.016V12a2.75 2.75 0 0 0 2.75 2.75h.77a.75.75 0 0 0 0-1.5h-.77c-.69 0-1.25-.56-1.25-1.25v-1.223A3.76 3.76 0 0 0 3.363 8a3.76 3.76 0 0 0 1.233-2.777V4c0-.69.56-1.25 1.25-1.25m4.308 10.5h-.77a.75.75 0 0 0 0 1.5h.77a2.75 2.75 0 0 0 2.75-2.75v-1.223c0-.85.487-1.634 1.252-2.016a.85.85 0 0 0 0-1.522 2.26 2.26 0 0 1-1.252-2.016V4a2.75 2.75 0 0 0-2.75-2.75h-.77a.75.75 0 0 0 0 1.5h.77c.69 0 1.25.56 1.25 1.25v1.223c0 1.073.462 2.076 1.233 2.777a3.76 3.76 0 0 0-1.233 2.777V12c0 .69-.56 1.25-1.25 1.25"
  }, undefined, false, undefined, this)
};
var curlyBracesFillSmallIcon = createIcon("curlyBracesFillSmall", iconDefinition);
export {
  iconDefinition,
  curlyBracesFillSmallIcon
};
