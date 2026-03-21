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

// src/nds-icons/src/lightBulbBright/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10 2.01c-2.78 0-5.04 2.23-5.04 4.98 0 .98.24 1.92.7 2.69.12.2.24.4.37.6.59.95 1.14 1.84 1.14 2.8 0 .17.07.33.18.44s.28.18.44.18h1.66v-2.71c0-.24-.07-.48-.19-.7L8.11 8.37c-.16-.26-.07-.6.19-.75.26-.16.6-.07.75.19L10 9.4l.95-1.59c.16-.26.49-.35.75-.19s.34.49.19.75l-1.15 1.92c-.13.21-.19.45-.19.69v2.71h1.67c.17 0 .33-.07.44-.18s.18-.28.18-.44c0-.96.55-1.85 1.14-2.8l.14-.23q.118-.186.23-.38c.46-.78.7-1.71.7-2.69 0-2.74-2.26-4.98-5.04-4.98zm.95 14.73h-1.9c-.35 0-.62.28-.62.62s.28.62.62.62h1.9c.34 0 .62-.28.62-.62s-.28-.62-.62-.62M8.1 14.6h3.8c.34 0 .62.28.62.62s-.28.62-.62.62H8.1c-.34 0-.62-.28-.62-.62s.27-.62.62-.62"
  }, undefined, false, undefined, this)
};
var lightBulbBrightFillIcon = createIcon("lightBulbBrightFill", iconDefinition);
export {
  lightBulbBrightFillIcon,
  iconDefinition
};
