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

// src/nds-icons/src/personCropCircleDashed/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8 1.95q-.606.001-1.18.115a.55.55 0 1 0 .213 1.08 5 5 0 0 1 1.934 0 .55.55 0 1 0 .213-1.08A6 6 0 0 0 8 1.95m3.362 1.02a.55.55 0 1 0-.612.913 5 5 0 0 1 1.367 1.367.55.55 0 0 0 .914-.612 6.1 6.1 0 0 0-1.67-1.669m-6.111.914a.55.55 0 1 0-.612-.914A6.1 6.1 0 0 0 2.97 4.64a.55.55 0 1 0 .914.611A5 5 0 0 1 5.25 3.883m8.685 2.937a.55.55 0 1 0-1.08.213 5 5 0 0 1 0 1.934.55.55 0 0 0 1.08.213 6.1 6.1 0 0 0 0-2.36m-10.791.213a.55.55 0 1 0-1.079-.213 6.1 6.1 0 0 0 0 2.36.55.55 0 1 0 1.08-.213 5 5 0 0 1 0-1.934m9.885 4.329a.55.55 0 0 0-.913-.612q-.248.368-.555.687l-.005.005a5 5 0 0 1-.33.312c-.64-1.083-1.854-1.8-3.227-1.8s-2.586.717-3.227 1.8c-.34-.293-.64-.63-.89-1.004a.55.55 0 1 0-.914.612 6 6 0 0 0 .683.845A6.03 6.03 0 0 0 8 14.05a6 6 0 0 0 3.362-1.02 6.1 6.1 0 0 0 1.669-1.668M6.19 4.953C6.612 4.428 7.236 4.11 8 4.11c.765 0 1.389.317 1.81.842.41.511.602 1.185.602 1.88s-.191 1.369-.602 1.88c-.421.525-1.045.842-1.81.842-.764 0-1.388-.317-1.81-.842-.41-.511-.602-1.185-.602-1.88s.192-1.369.602-1.88"
  }, undefined, false, undefined, this)
};
var personCropCircleDashedFillSmallIcon = createIcon("personCropCircleDashedFillSmall", iconDefinition);
export {
  personCropCircleDashedFillSmallIcon,
  iconDefinition
};
