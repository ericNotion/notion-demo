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

// src/nds-icons/src/link/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M6.65 17.67a4 4 0 0 1-2.85-1.18l-.37-.37a4.026 4.026 0 0 1 0-5.69l1.85-1.85c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1.85 1.85c-.89.89-.89 2.33 0 3.22l.37.37c.89.89 2.33.89 3.22 0l1.85-1.85c.34-.34.9-.34 1.24 0s.34.9 0 1.24L9.5 16.5a4 4 0 0 1-2.85 1.18zm.44-3.96c-.22 0-.45-.08-.62-.26a.88.88 0 0 1 0-1.24l5.45-5.45c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-5.45 5.45a.87.87 0 0 1-.62.26m6.93-2.11c-.22 0-.45-.08-.62-.26a.88.88 0 0 1 0-1.24l1.85-1.85c.43-.43.67-1 .67-1.61s-.24-1.18-.67-1.61l-.37-.37c-.86-.86-2.36-.86-3.22 0L9.81 6.51c-.34.34-.9.34-1.24 0a.88.88 0 0 1 0-1.24l1.85-1.85a4 4 0 0 1 2.85-1.18 4 4 0 0 1 2.85 1.18l.37.37a4 4 0 0 1 1.18 2.85 4 4 0 0 1-1.18 2.85l-1.85 1.85c-.17.17-.4.26-.62.26"
  }, undefined, false, undefined, this)
};
var linkFillIcon = createIcon("linkFill", iconDefinition);
export {
  linkFillIcon,
  iconDefinition
};
