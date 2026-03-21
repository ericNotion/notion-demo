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

// src/nds-icons/src/calloutBlock/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M11.8 2.375c1.008 0 1.825.817 1.825 1.825v7.6a1.825 1.825 0 0 1-1.825 1.825H4.2A1.825 1.825 0 0 1 2.375 11.8V4.2c0-1.008.817-1.825 1.825-1.825zM5.354 4.489a.625.625 0 0 0-.499.613v1.007a.625.625 0 0 0 1.25 0v-.382h1.27v4.546h-.13a.625.625 0 0 0 0 1.25h1.51l.127-.012a.625.625 0 0 0 0-1.225l-.126-.013h-.131V5.727h1.27v.382a.625.625 0 1 0 1.25 0V5.102a.6.6 0 0 0-.046-.234l-.015-.03a.6.6 0 0 0-.107-.158q-.015-.019-.033-.034l-.051-.042q-.017-.015-.036-.027l-.067-.036q-.016-.01-.034-.018a.6.6 0 0 0-.11-.034l-.126-.012H5.48a.6.6 0 0 0-.126.012"
  }, undefined, false, undefined, this)
};
var calloutBlockFillSmallIcon = createIcon("calloutBlockFillSmall", iconDefinition);
export {
  iconDefinition,
  calloutBlockFillSmallIcon
};
