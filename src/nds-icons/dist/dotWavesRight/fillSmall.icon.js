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

// src/nds-icons/src/dotWavesRight/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10.16 1.501a.75.75 0 1 0-1.056 1.066 7.7 7.7 0 0 1 2.293 5.483 7.7 7.7 0 0 1-2.263 5.454.75.75 0 0 0 1.06 1.06 9.2 9.2 0 0 0 2.703-6.514 9.2 9.2 0 0 0-2.738-6.549M4.878 8.05a1.199 1.199 0 1 1-2.398 0 1.199 1.199 0 0 1 2.398 0"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.402 3.268a.75.75 0 0 1 1.06 0 6.75 6.75 0 0 1 1.984 4.782c0 1.866-.76 3.558-1.984 4.782a.75.75 0 1 1-1.06-1.06A5.25 5.25 0 0 0 8.946 8.05c0-1.45-.59-2.766-1.544-3.721a.75.75 0 0 1 0-1.06"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.73 5a.75.75 0 0 0-1.06 1.061 2.81 2.81 0 0 1-.001 3.979.75.75 0 1 0 1.061 1.06 4.3 4.3 0 0 0 1.265-3.05c0-1.19-.485-2.27-1.265-3.05"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var dotWavesRightFillSmallIcon = createIcon("dotWavesRightFillSmall", iconDefinition);
export {
  iconDefinition,
  dotWavesRightFillSmallIcon
};
