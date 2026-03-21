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

// src/nds-icons/src/blockSync/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M2.5 3.75a.75.75 0 0 0 0 1.5H15a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5H7a.75.75 0 0 0 0-1.5zm4.731 4.679a.623.623 0 0 1 .625-.625H8.4a4.75 4.75 0 0 1 5.868-3.38 4.75 4.75 0 0 1 2.68 1.941.75.75 0 1 1-1.247.832 3.25 3.25 0 0 0-5.726.607h.167a.623.623 0 0 1 .625.625.62.62 0 0 1-.183.442L9.44 14.013a.625.625 0 0 1-.884 0l-1.143-1.142a.62.62 0 0 1-.183-.442m7.156 3.511a3.25 3.25 0 0 1-4.091-1.137.75.75 0 1 0-1.248.832 4.75 4.75 0 0 0 8.549-1.438h.546a.623.623 0 0 0 .582-.853.6.6 0 0 0-.14-.214l-1.143-1.143a.625.625 0 0 0-.884 0l-1.143 1.143a.63.63 0 0 0-.183.431v.01a.62.62 0 0 0 .625.626h.165l-.052.122a3.25 3.25 0 0 1-1.583 1.62"
  }, undefined, false, undefined, this)
};
var blockSyncFillIcon = createIcon("blockSyncFill", iconDefinition);
export {
  iconDefinition,
  blockSyncFillIcon
};
