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

// src/nds-icons/src/circleDotted/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8 1.875q-.201 0-.4.013a.625.625 0 1 0 .08 1.247 5 5 0 0 1 .64 0 .625.625 0 0 0 .08-1.247 6 6 0 0 0-.4-.013m-1.873.915a.625.625 0 0 0-.837-.284q-.36.179-.694.401a.625.625 0 1 0 .696 1.039q.264-.177.552-.32a.625.625 0 0 0 .283-.837m4.583-.283a.625.625 0 1 0-.554 1.12q.288.143.552.32a.625.625 0 1 0 .696-1.039 6 6 0 0 0-.694-.401m2.383 2.09a.625.625 0 0 0-1.039.696q.177.264.32.552a.625.625 0 1 0 1.12-.554 6 6 0 0 0-.401-.694m-9.319-.171a.625.625 0 0 0-.867.171 6 6 0 0 0-.401.694.625.625 0 1 0 1.12.554q.143-.288.32-.552a.625.625 0 0 0-.172-.867M2.552 7.016a.625.625 0 0 0-.664.584 6 6 0 0 0 0 .8.625.625 0 1 0 1.247-.08 5 5 0 0 1 0-.64.625.625 0 0 0-.583-.664m11.56.584a.625.625 0 1 0-1.247.08 5 5 0 0 1 0 .64.625.625 0 1 0 1.247.08 6 6 0 0 0 0-.8M3.626 10.156a.625.625 0 1 0-1.12.554q.179.36.401.694a.625.625 0 1 0 1.039-.696 5 5 0 0 1-.32-.552m9.584-.283a.625.625 0 0 0-.836.283 5 5 0 0 1-.32.552.625.625 0 1 0 1.039.696 6 6 0 0 0 .401-.694.625.625 0 0 0-.283-.837m-1.636 2.353a.625.625 0 0 0-.867-.172q-.264.177-.552.32a.625.625 0 1 0 .554 1.12 6 6 0 0 0 .694-.401.625.625 0 0 0 .171-.867m-6.283-.172a.625.625 0 1 0-.696 1.039q.333.222.694.401a.625.625 0 0 0 .554-1.12 5 5 0 0 1-.552-.32m2.388.811a.625.625 0 1 0-.08 1.247 6 6 0 0 0 .8 0 .625.625 0 1 0-.08-1.247 5 5 0 0 1-.64 0"
  }, undefined, false, undefined, this)
};
var circleDottedSmallIcon = createIcon("circleDottedSmall", iconDefinition);
export {
  iconDefinition,
  circleDottedSmallIcon
};
