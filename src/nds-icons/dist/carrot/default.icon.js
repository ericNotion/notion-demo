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

// src/nds-icons/src/carrot/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M11.375 5.413a4.5 4.5 0 0 1-.152-1.177c0-1.482.673-2.683 1.504-2.683.741 0 1.357.957 1.481 2.217.898-.62 1.846-.767 2.318-.296.471.472.323 1.42-.296 2.318 1.26.123 2.217.74 2.217 1.481 0 .83-1.202 1.504-2.683 1.504-.422 0-.822-.055-1.177-.152a3.23 3.23 0 0 1-1.378 3.606l-9.234 5.853c-1.345.852-2.912-.714-2.059-2.06L7.77 6.791a3.23 3.23 0 0 1 3.606-1.378m.517 1.708a1.976 1.976 0 0 0-3.067.339l-.175.276 1.232 1.232a.55.55 0 1 1-.778.778L8.046 8.688l-.466.736 1.306 1.307a.55.55 0 1 1-.778.778l-1.132-1.132-4.004 6.317a.23.23 0 0 0-.042.16.26.26 0 0 0 .075.14.26.26 0 0 0 .141.076c.038.005.09.002.16-.042l3.221-2.042-.561-.561a.55.55 0 1 1 .778-.778l.735.736 5.06-3.208a1.976 1.976 0 0 0 .34-3.067z"
  }, undefined, false, undefined, this)
};
var carrotIcon = createIcon("carrot", iconDefinition);
export {
  iconDefinition,
  carrotIcon
};
