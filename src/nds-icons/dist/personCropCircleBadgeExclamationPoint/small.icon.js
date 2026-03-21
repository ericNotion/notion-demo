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

// src/nds-icons/src/personCropCircleBadgeExclamationPoint/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8 1.875a6.125 6.125 0 0 0-6.057 7.043.075.075 0 0 0 .1.059 4 4 0 0 1 1.058-.233.075.075 0 0 0 .068-.085 4.875 4.875 0 1 1 8.076 2.98c-.666-1.063-1.878-1.76-3.245-1.76-.52 0-1.02.1-1.474.285a.075.075 0 0 0-.032.115q.329.437.526.954a.075.075 0 0 0 .095.044c.274-.095.572-.148.885-.148.962 0 1.783.5 2.212 1.217a4.86 4.86 0 0 1-2.87.485.075.075 0 0 0-.085.069q-.045.555-.233 1.056a.075.075 0 0 0 .059.1q.449.069.917.069a6.125 6.125 0 0 0 0-12.25"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8 4.036c-.787 0-1.432.327-1.868.87-.424.528-.619 1.219-.619 1.927s.195 1.4.619 1.927c.436.543 1.081.87 1.868.87s1.433-.327 1.869-.87c.423-.528.618-1.219.618-1.927s-.195-1.4-.618-1.927c-.436-.543-1.082-.87-1.869-.87m-.893 1.652c.195-.243.48-.402.893-.402s.698.159.894.402c.207.258.343.653.343 1.145s-.136.887-.343 1.145c-.196.243-.48.402-.894.402-.413 0-.698-.159-.893-.402-.208-.258-.344-.653-.344-1.145s.136-.887.344-1.145M3.4 9.525a3.075 3.075 0 1 0 0 6.15 3.075 3.075 0 0 0 0-6.15m-.425 1.409a.425.425 0 1 1 .85 0v2a.425.425 0 0 1-.85 0zm0 3.44a.425.425 0 1 1 .85.002.425.425 0 0 1-.85-.002"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var personCropCircleBadgeExclamationPointSmallIcon = createIcon("personCropCircleBadgeExclamationPointSmall", iconDefinition);
export {
  personCropCircleBadgeExclamationPointSmallIcon,
  iconDefinition
};
