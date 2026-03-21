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

// src/nds-icons/src/docWithQuotationMarks/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10.75 13.8a1.8 1.8 0 0 0 1.8-1.8V4a1.8 1.8 0 0 0-1.8-1.8h-5.5A1.8 1.8 0 0 0 3.45 4v8a1.8 1.8 0 0 0 1.8 1.8zM5.435 5.927c0-.839.68-1.519 1.52-1.519h.174a.3.3 0 0 1 0 .6h-.174a.92.92 0 0 0-.907.766.997.997 0 1 1 .732 1.673 1.345 1.345 0 0 1-1.345-1.345zm2.787 0c0-.839.68-1.519 1.52-1.519h.174a.3.3 0 0 1 0 .6h-.174a.92.92 0 0 0-.907.766.997.997 0 1 1 .732 1.673 1.345 1.345 0 0 1-1.345-1.345zM8.5 11.25a.5.5 0 0 1-.5.5H5.75a.5.5 0 1 1 0-1H8a.5.5 0 0 1 .5.5m1.75-1.5h-4.5a.5.5 0 0 1 0-1h4.5a.5.5 0 0 1 0 1"
  }, undefined, false, undefined, this)
};
var docWithQuotationMarksFillSmallIcon = createIcon("docWithQuotationMarksFillSmall", iconDefinition);
export {
  iconDefinition,
  docWithQuotationMarksFillSmallIcon
};
