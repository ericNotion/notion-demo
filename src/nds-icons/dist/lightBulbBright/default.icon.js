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

// src/nds-icons/src/lightBulbBright/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M12.21 13.71c-.34 0-.62-.28-.62-.62 0-1.31.7-2.45 1.32-3.46.12-.2.24-.39.36-.58.34-.58.53-1.3.53-2.06 0-2.06-1.7-3.73-3.79-3.73S6.22 4.93 6.22 6.99c0 .76.18 1.47.53 2.06.11.19.23.39.35.58l.023.037c.614 1 1.307 2.129 1.297 3.423 0 .34-.24.61-.63.62-.35 0-.62-.28-.62-.63 0-.96-.55-1.85-1.14-2.8q-.091-.15-.185-.3-.095-.15-.185-.3c-.46-.78-.7-1.71-.7-2.69 0-2.74 2.26-4.98 5.04-4.98s5.04 2.23 5.04 4.98c0 .98-.24 1.92-.7 2.69-.12.2-.24.4-.37.61-.59.95-1.14 1.84-1.14 2.8 0 .34-.28.62-.62.63zm-1.26 4.28h-1.9c-.35 0-.62-.28-.62-.62s.28-.62.62-.62h1.9c.34 0 .62.28.62.62s-.28.62-.62.62M8.1 15.85h3.8c.34 0 .62-.28.62-.62s-.28-.62-.62-.62H8.1c-.34 0-.62.28-.62.62s.27.62.62.62"
  }, undefined, false, undefined, this)
};
var lightBulbBrightIcon = createIcon("lightBulbBright", iconDefinition);
export {
  lightBulbBrightIcon,
  iconDefinition
};
