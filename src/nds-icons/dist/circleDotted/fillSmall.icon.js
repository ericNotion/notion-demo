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

// src/nds-icons/src/circleDotted/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.592 1.763a6 6 0 0 1 .816 0 .75.75 0 1 1-.096 1.497 5 5 0 0 0-.624 0 .75.75 0 0 1-.096-1.497m-1.352.971a.75.75 0 0 1-.34 1.005 5 5 0 0 0-.539.31.75.75 0 0 1-.834-1.246q.339-.227.708-.41a.75.75 0 0 1 1.004.34m3.521.001a.75.75 0 0 1 1.005-.34q.369.182.708.41a.75.75 0 0 1-.834 1.246 5 5 0 0 0-.538-.311.75.75 0 0 1-.34-1.005m2.395 1.586a.75.75 0 0 1 1.04.207q.228.339.41.708a.75.75 0 1 1-1.344.664 5 5 0 0 0-.312-.538.75.75 0 0 1 .206-1.04M3.844 4.32a.75.75 0 0 1 .206 1.041 5 5 0 0 0-.311.538.75.75 0 0 1-1.345-.664q.182-.369.41-.708a.75.75 0 0 1 1.04-.206M2.56 6.892a.75.75 0 0 1 .7.796 5 5 0 0 0 0 .624.75.75 0 0 1-1.497.096 6 6 0 0 1 0-.816.75.75 0 0 1 .797-.7m10.88 0a.75.75 0 0 1 .797.7 6 6 0 0 1 0 .816.75.75 0 1 1-1.497-.096 5 5 0 0 0 0-.624.75.75 0 0 1 .7-.796M2.734 9.76a.75.75 0 0 1 1.005.34q.139.28.31.539a.75.75 0 0 1-1.246.834 6 6 0 0 1-.41-.708.75.75 0 0 1 .34-1.004m10.533-.001a.75.75 0 0 1 .34 1.005 6 6 0 0 1-.41.708.75.75 0 1 1-1.246-.834q.173-.259.312-.538a.75.75 0 0 1 1.004-.34M4.32 12.156a.75.75 0 0 1 1.041-.206q.259.173.538.312a.75.75 0 0 1-.664 1.344 6 6 0 0 1-.708-.41.75.75 0 0 1-.206-1.04m7.359 0a.75.75 0 0 1-.207 1.04 6 6 0 0 1-.708.41.75.75 0 1 1-.664-1.344q.28-.14.538-.312a.75.75 0 0 1 1.04.206M6.892 13.44a.75.75 0 0 1 .796-.7 5 5 0 0 0 .624 0 .75.75 0 1 1 .096 1.497 6 6 0 0 1-.816 0 .75.75 0 0 1-.7-.797"
  }, undefined, false, undefined, this)
};
var circleDottedFillSmallIcon = createIcon("circleDottedFillSmall", iconDefinition);
export {
  iconDefinition,
  circleDottedFillSmallIcon
};
