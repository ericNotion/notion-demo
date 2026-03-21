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

// src/nds-icons/src/rectangleCompressVertical/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m10.85 4.637 1.031-1.03a.875.875 0 1 1 1.238 1.237l-2.5 2.5a.875.875 0 0 1-1.238 0l-2.5-2.5A.875.875 0 1 1 8.12 3.606l.981.982V1.72a.875.875 0 1 1 1.75 0zM2.125 10c0-1.174.951-2.125 2.125-2.125h11.5a2.125 2.125 0 0 1 0 4.25H4.25A2.125 2.125 0 0 1 2.125 10m2.125-.375a.375.375 0 1 0 0 .75h11.5a.375.375 0 0 0 0-.75zm5.131 3.031a.875.875 0 0 1 1.238 0l2.5 2.5a.875.875 0 1 1-1.238 1.238l-.981-.982v2.863a.875.875 0 1 1-1.75 0v-2.912l-1.031 1.03a.875.875 0 0 1-1.238-1.237z"
  }, undefined, false, undefined, this)
};
var rectangleCompressVerticalFillIcon = createIcon("rectangleCompressVerticalFill", iconDefinition);
export {
  rectangleCompressVerticalFillIcon,
  iconDefinition
};
