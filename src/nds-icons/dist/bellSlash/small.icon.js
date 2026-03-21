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

// src/nds-icons/src/bellSlash/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m4.145 2.922-.227-.265a.55.55 0 1 0-.836.716l1.491 1.739a3.9 3.9 0 0 0-.46 1.836v.895a2.78 2.78 0 0 1-.687 1.83l-.616.703c-.709.81-.134 2.078.942 2.078h2.2a2.081 2.081 0 0 0 4.095 0h.819l1.216 1.419a.55.55 0 0 0 .843-.707L4.153 2.931zm1.068 4.026c0-.32.054-.626.152-.912l4.558 5.318h-6.17a.153.153 0 0 1-.116-.253l.617-.705a3.88 3.88 0 0 0 .959-2.553zm1.773 5.506h2.028a1.081 1.081 0 0 1-2.028 0m6.302-.554a1.244 1.244 0 0 0-.098-1.524l-.616-.704a2.78 2.78 0 0 1-.687-1.829v-.895a3.89 3.89 0 0 0-2.124-3.465 1.85 1.85 0 0 0-3.526 0l-.112.06.738.86.062-.027.29-.121.042-.312A.75.75 0 0 1 8 3.29c.378 0 .692.281.743.653l.043.312.29.121a2.79 2.79 0 0 1 1.711 2.572v.895c0 .513.102 1.016.294 1.482z"
  }, undefined, false, undefined, this)
};
var bellSlashSmallIcon = createIcon("bellSlashSmall", iconDefinition);
export {
  iconDefinition,
  bellSlashSmallIcon
};
