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

// src/nds-icons/src/wifiExclamationMark/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10.875 3.597a.875.875 0 0 0-1.75 0v8a.875.875 0 0 0 1.75 0zM1.92 7.345A11.45 11.45 0 0 1 8 4.128v1.784a9.7 9.7 0 0 0-4.835 2.664.875.875 0 1 1-1.244-1.231M4.13 9.467A8.4 8.4 0 0 1 8 7.262v1.82a6.66 6.66 0 0 0-2.633 1.622.875.875 0 0 1-1.238-1.238M12 7.231v1.812c1.053.322 1.997.9 2.758 1.66a.875.875 0 0 0 1.238-1.237A8.4 8.4 0 0 0 12 7.231m-5.705 4.401A5.4 5.4 0 0 1 8 10.484v1.113c0 .274.055.536.155.774q-.34.215-.623.498a.875.875 0 1 1-1.237-1.237M12 11.597q-.002.378-.13.712.397.235.724.56a.875.875 0 0 0 1.237-1.237A5.35 5.35 0 0 0 12 10.433zm0-7.491v1.78c1.9.386 3.6 1.33 4.924 2.653A.875.875 0 1 0 18.161 7.3 11.44 11.44 0 0 0 12 4.106M10.063 13.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
  }, undefined, false, undefined, this)
};
var wifiExclamationMarkFillIcon = createIcon("wifiExclamationMarkFill", iconDefinition);
export {
  wifiExclamationMarkFillIcon,
  iconDefinition
};
