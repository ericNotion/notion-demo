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

// src/nds-icons/src/keyboardDown/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M1.625 4.322c0-1.174.951-2.125 2.125-2.125h12.5c1.174 0 2.125.951 2.125 2.125v7.356a2.125 2.125 0 0 1-2.125 2.125H3.75a2.125 2.125 0 0 1-2.125-2.125zM4.8 4.75a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3m1.95.65a.65.65 0 1 0 1.3 0 .65.65 0 0 0-1.3 0M10 4.75a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3m1.95.65a.65.65 0 1 0 1.3 0 .65.65 0 0 0-1.3 0m3.25-.65a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3M4.15 8a.65.65 0 1 0 1.3 0 .65.65 0 0 0-1.3 0m3.25-.65a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3M9.35 8a.65.65 0 1 0 1.3 0 .65.65 0 0 0-1.3 0m3.25-.65a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3m1.95.65a.65.65 0 1 0 1.3 0 .65.65 0 0 0-1.3 0M4.8 9.95a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3m1.93.636c0 .345.28.625.624.625h5.25a.625.625 0 1 0 0-1.25h-5.25a.625.625 0 0 0-.625.625m8.47-.636a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3m-1.021 5.218c.201.28.137.67-.143.872L10.5 18.58a.625.625 0 0 1-.73 0l-3.535-2.54a.625.625 0 0 1 .73-1.015l3.17 2.278 3.17-2.278a.625.625 0 0 1 .873.143"
  }, undefined, false, undefined, this)
};
var keyboardDownFillIcon = createIcon("keyboardDownFill", iconDefinition);
export {
  keyboardDownFillIcon,
  iconDefinition
};
