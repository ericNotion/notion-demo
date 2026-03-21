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

// src/nds-icons/src/viewCalendar/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  fittedViewBox: "2.45 2.45 11.11 11.11",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M2.45 4.25a1.8 1.8 0 0 1 1.8-1.8h7.5a1.8 1.8 0 0 1 1.8 1.8v.182H2.45zm0 1.182v6.318a1.8 1.8 0 0 0 1.8 1.8h7.5a1.8 1.8 0 0 0 1.8-1.8V5.432zM7.621 7.05a.568.568 0 1 1-1.136 0 .568.568 0 0 1 1.136 0m-.568 2.462a.568.568 0 1 1 0-1.136.568.568 0 0 1 0 1.136m.568 1.326a.568.568 0 1 1-1.136 0 .568.568 0 0 1 1.136 0m1.326-3.22a.568.568 0 1 1 0-1.136.568.568 0 0 1 0 1.136m.568 1.326a.568.568 0 1 1-1.136 0 .568.568 0 0 1 1.136 0m-.568 2.462a.568.568 0 1 1 0-1.136.568.568 0 0 1 0 1.136M11.41 7.05a.568.568 0 1 1-1.136 0 .568.568 0 0 1 1.136 0M5.16 9.512a.568.568 0 1 1 0-1.136.568.568 0 0 1 0 1.136m.568 1.326a.568.568 0 1 1-1.136 0 .568.568 0 0 1 1.136 0m5.114-1.326a.568.568 0 1 1 0-1.136.568.568 0 0 1 0 1.136"
  }, undefined, false, undefined, this)
};
var viewCalendarFillSmallIcon = createIcon("viewCalendarFillSmall", iconDefinition);
export {
  viewCalendarFillSmallIcon,
  iconDefinition
};
