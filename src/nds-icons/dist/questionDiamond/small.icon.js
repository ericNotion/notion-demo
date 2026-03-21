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

// src/nds-icons/src/questionDiamond/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.867 10.355a.676.676 0 1 1 0 1.352.676.676 0 0 1 0-1.352m.114-5.489c1.168 0 2.358.779 2.359 2.014 0 .713-.428 1.29-.975 1.633l.001.001-.637.434.001.001a.59.59 0 0 0-.271.476.625.625 0 0 1-1.25 0c0-.61.318-1.164.81-1.504l.003-.002.64-.437.013-.009.014-.008c.288-.175.4-.401.4-.585 0-.301-.359-.764-1.108-.764-.631 0-1.017.358-1.09.645a.625.625 0 0 1-1.213-.303c.248-.99 1.264-1.592 2.303-1.592"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.71 1.69a1.825 1.825 0 0 1 2.58 0l5.021 5.02a1.826 1.826 0 0 1 0 2.58l-5.02 5.021a1.826 1.826 0 0 1-2.581 0l-5.02-5.02a1.825 1.825 0 0 1 0-2.581zm1.697.883a.576.576 0 0 0-.813 0l-5.021 5.02a.576.576 0 0 0 0 .814l5.02 5.02c.225.225.59.225.814 0l5.02-5.02a.576.576 0 0 0 0-.813z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var questionDiamondSmallIcon = createIcon("questionDiamondSmall", iconDefinition);
export {
  questionDiamondSmallIcon,
  iconDefinition
};
