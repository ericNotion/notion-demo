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

// src/nds-icons/src/calendarAlt/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  fittedViewBox: "2.37 2.37 11.25 11.26",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M13.625 11.8a1.825 1.825 0 0 1-1.825 1.825H4.2A1.825 1.825 0 0 1 2.375 11.8V6.15h11.25zM5.7 9.7a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2m2.3 0a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2m-2.3-2a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2m2.3 0a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2m2.3 0a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2m1.5-5.325c1.008 0 1.825.817 1.825 1.825v.85H2.375V4.2c0-1.008.817-1.825 1.825-1.825z"
  }, undefined, false, undefined, this)
};
var calendarAltFillSmallIcon = createIcon("calendarAltFillSmall", iconDefinition);
export {
  iconDefinition,
  calendarAltFillSmallIcon
};
