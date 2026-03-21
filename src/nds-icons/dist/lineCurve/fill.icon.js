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

// src/nds-icons/src/lineCurve/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.644 16.23c-.397.455-.948.832-1.662.832-.97 0-1.623-.676-2.042-1.343-.432-.687-.769-1.596-1.055-2.544-.282-.932-.535-1.97-.78-2.98l-.021-.086c-.255-1.048-.503-2.06-.778-2.947a.875.875 0 0 1 1.672-.517c.293.947.554 2.013.806 3.05l.016.064c.25 1.027.492 2.024.76 2.91.276.914.56 1.638.861 2.118.315.5.51.525.56.525.04 0 .15-.01.343-.231.202-.232.418-.612.64-1.157.441-1.087.803-2.563 1.186-4.131l.011-.048c.369-1.511.759-3.108 1.255-4.328.25-.616.553-1.203.94-1.647.396-.455.948-.832 1.662-.832.968 0 1.62.68 2.036 1.345.43.686.766 1.595 1.052 2.542.278.92.528 1.943.772 2.939l.03.126c.257 1.047.508 2.059.785 2.946a.875.875 0 1 1-1.67.522c-.297-.949-.56-2.015-.814-3.052l-.026-.106c-.248-1.013-.488-1.995-.752-2.869-.277-.915-.56-1.639-.86-2.12-.314-.502-.507-.524-.553-.524-.04 0-.149.01-.342.232-.202.232-.418.612-.64 1.157-.441 1.087-.803 2.563-1.186 4.131l-.012.048c-.368 1.511-.758 3.108-1.254 4.328-.25.616-.553 1.203-.94 1.647"
  }, undefined, false, undefined, this)
};
var lineCurveFillIcon = createIcon("lineCurveFill", iconDefinition);
export {
  lineCurveFillIcon,
  iconDefinition
};
