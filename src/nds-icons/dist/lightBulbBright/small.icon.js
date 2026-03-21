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

// src/nds-icons/src/lightBulbBright/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8 1.385c-2.23 0-4.035 1.793-4.035 3.985 0 .782.193 1.525.56 2.147.09.161.181.312.281.473.454.725.86 1.386.86 2.08a.63.63 0 0 0 .624.625.63.63 0 0 0 .625-.625c.01-1.064-.553-1.972-1.041-2.75l-.27-.448a3 3 0 0 1-.389-1.512C5.215 3.853 6.46 2.625 8 2.625s2.785 1.228 2.785 2.735c0 .558-.137 1.084-.39 1.512l-.269.449-.01.016c-.475.773-1.03 1.675-1.03 2.723a.63.63 0 0 0 .55.62v.015h.074a.63.63 0 0 0 .625-.625c0-.684.406-1.355.859-2.08v-.002l.001-.001q.067-.117.139-.233t.141-.237c.367-.622.56-1.365.56-2.147 0-2.202-1.815-3.985-4.035-3.985m-1.6 10.19a.63.63 0 0 0-.625.625.63.63 0 0 0 .625.625h3.2a.63.63 0 0 0 .625-.625.63.63 0 0 0-.625-.625zm.8 1.8a.63.63 0 0 0-.625.625.63.63 0 0 0 .625.625h1.6A.63.63 0 0 0 9.425 14a.63.63 0 0 0-.625-.625z"
  }, undefined, false, undefined, this)
};
var lightBulbBrightSmallIcon = createIcon("lightBulbBrightSmall", iconDefinition);
export {
  lightBulbBrightSmallIcon,
  iconDefinition
};
