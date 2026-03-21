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

// src/nds-icons/src/aiCoin/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 27 29",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.502 9.637a4.035 4.035 0 0 1 6.943.036.88.88 0 1 1-1.52.887 2.275 2.275 0 0 0-3.914-.019l-4.96 8.28 3.608.587a.879.879 0 0 1-.28 1.736l-4.89-.792a.88.88 0 0 1-.614-1.32l5.627-9.395Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M14.197 11.79a1.129 1.129 0 1 1-.36 2.229 1.129 1.129 0 0 1 .36-2.228Zm-5.95-.963a1.129 1.129 0 1 1-.363 2.228 1.129 1.129 0 0 1 .363-2.228ZM5.602 7.62a4.038 4.038 0 0 1 5.739.367.88.88 0 0 1-1.33 1.152 2.275 2.275 0 0 0-3.236-.206.88.88 0 1 1-1.173-1.313Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M15.381 0c6.447 0 11.356 6.475 11.357 14.022 0 7.546-4.91 14.02-11.357 14.02h-4.023l-.6-.019C4.608 27.637 0 21.333 0 14.022 0 6.475 4.91 0 11.356 0h4.025Zm-4.025 1.76c-5.124 0-9.596 5.294-9.597 12.262 0 6.967 4.473 12.26 9.597 12.26 5.125 0 9.597-5.292 9.597-12.26S16.481 1.759 11.356 1.759Zm10.953 8.567a17.05 17.05 0 0 1 .405 3.695c0 5.014-2.169 9.551-5.514 12.034 4.319-1.077 7.778-5.907 7.778-12.034 0-1.298-.156-2.537-.442-3.695h-2.227ZM20.744 6.13c.42.764.782 1.58 1.075 2.436h2.16a12.897 12.897 0 0 0-1.256-2.436h-1.98Zm-3.546-4.147c.89.66 1.694 1.467 2.399 2.388h1.687C20.1 3.19 18.702 2.359 17.198 1.984Z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var aiCoinIcon = createIcon("aiCoin", iconDefinition);
export {
  iconDefinition,
  aiCoinIcon
};
