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

// src/nds-icons/src/hourglass/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M6.175 2.4c-.842 0-1.525.683-1.525 1.525v.4c0 1.283.481 2.52 1.349 3.465L8.027 10l-2.028 2.21a5.13 5.13 0 0 0-1.35 3.465v.4c0 .842.684 1.525 1.526 1.525h7.65c.842 0 1.525-.683 1.525-1.525v-.4c0-1.283-.481-2.52-1.349-3.465L11.973 10l2.028-2.21a5.13 5.13 0 0 0 1.349-3.465v-.4c0-.842-.683-1.525-1.525-1.525zM5.9 3.925c0-.152.123-.275.275-.275h7.65c.152 0 .275.123.275.275v.4c0 .97-.364 1.905-1.02 2.62l-2.416 2.632a.625.625 0 0 0 0 .846l2.416 2.632c.62.676.98 1.548 1.017 2.46l-2.907-2.463a1.84 1.84 0 0 0-2.38 0l-2.907 2.464a3.88 3.88 0 0 1 1.017-2.46l2.415-2.633a.625.625 0 0 0 0-.846L6.92 6.945a3.88 3.88 0 0 1-1.02-2.62z"
  }, undefined, false, undefined, this)
};
var hourglassIcon = createIcon("hourglass", iconDefinition);
export {
  iconDefinition,
  hourglassIcon
};
