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

// src/nds-icons/src/dotWavesRight/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10.071 1.59a.625.625 0 1 0-.879.888 7.82 7.82 0 0 1 2.33 5.572 7.82 7.82 0 0 1-2.3 5.542.625.625 0 0 0 .884.884 9.07 9.07 0 0 0 2.666-6.426 9.07 9.07 0 0 0-2.7-6.46"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.374 3.356a.625.625 0 1 0-.884.884 5.37 5.37 0 0 1 1.58 3.81 5.37 5.37 0 0 1-1.58 3.81.625.625 0 0 0 .884.884A6.62 6.62 0 0 0 10.32 8.05a6.62 6.62 0 0 0-1.947-4.694"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.642 5.089a.625.625 0 1 0-.884.884 2.93 2.93 0 0 1 0 4.155.625.625 0 1 0 .884.884A4.18 4.18 0 0 0 7.87 8.05c0-1.156-.47-2.204-1.228-2.961M3.68 6.975a1.075 1.075 0 1 0 0 2.15 1.075 1.075 0 0 0 0-2.15"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var dotWavesRightSmallIcon = createIcon("dotWavesRightSmall", iconDefinition);
export {
  iconDefinition,
  dotWavesRightSmallIcon
};
