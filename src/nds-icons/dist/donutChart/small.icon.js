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

// src/nds-icons/src/donutChart/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.49 2.048a.55.55 0 0 1 .564.404l.018.11a.55.55 0 0 1-.3.525l-.104.04h-.002l-.196.059h-.001A5.05 5.05 0 0 0 2.955 7.79L2.95 8A5.05 5.05 0 0 0 8 13.05l.215-.005a5.05 5.05 0 0 0 4.634-3.63l.045-.111a.55.55 0 0 1 .64-.272l.09.035c.2.1.32.312.304.534l-.022.118a6.15 6.15 0 0 1-5.644 4.426L8 14.149a6.15 6.15 0 0 1-6.143-5.833L1.85 8a6.15 6.15 0 0 1 4.52-5.932z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.36 5.088a.55.55 0 0 1 .656.232l.048.1a.55.55 0 0 1-.143.59l-.089.066A2.25 2.25 0 0 0 5.755 7.85L5.75 8A2.25 2.25 0 0 0 8 10.25l.147-.005A2.25 2.25 0 0 0 9.89 9.224l.07-.087a.55.55 0 0 1 .69-.075l.087.07a.55.55 0 0 1 .126.592l-.05.098a3.35 3.35 0 0 1-2.593 1.52L8 11.35a3.35 3.35 0 0 1-3.346-3.177L4.65 8a3.35 3.35 0 0 1 1.61-2.863zm1.956-3.23A6.15 6.15 0 0 1 14.15 8l-.01.11a.55.55 0 0 1-.429.43l-.11.01h-2.8a.55.55 0 0 1-.54-.44L10.25 8a2.25 2.25 0 0 0-1.81-2.206l-.21-.031-.003-.001-.223-.012H8a.55.55 0 0 1-.54-.44l-.01-.11V2.4l.01-.11A.55.55 0 0 1 8 1.85zm.234 2.837.061.012a3.35 3.35 0 0 1 2.682 2.682l.012.061h1.715l-.011-.085a5.05 5.05 0 0 0-4.374-4.374l-.085-.01z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var donutChartSmallIcon = createIcon("donutChartSmall", iconDefinition);
export {
  iconDefinition,
  donutChartSmallIcon
};
