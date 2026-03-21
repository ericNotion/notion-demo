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

// src/nds-icons/src/pin/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M6.653 2.375A.625.625 0 0 0 6.028 3v.474A3.62 3.62 0 0 0 7.24 6.179l.289.258-.157 1.603a4.625 4.625 0 0 0-2.997 4.33V13c0 .345.28.625.625.625h4.13v3.08c0 .158.035.317.1.46l.433.94a.35.35 0 0 0 .565.103l.063-.087.44-.956c.065-.142.1-.3.1-.46v-3.08H15c.345 0 .625-.28.625-.625v-.63a4.625 4.625 0 0 0-2.997-4.33l-.157-1.603.289-.258a3.63 3.63 0 0 0 1.212-2.705V3a.625.625 0 0 0-.625-.625zm1.42 2.871c-.468-.417-.75-1-.79-1.621h5.434a2.38 2.38 0 0 1-.79 1.621l-.525.47a.63.63 0 0 0-.206.527l.227 2.318a.63.63 0 0 0 .422.531l.237.08a3.375 3.375 0 0 1 2.293 3.197v.006h-8.75v-.006c0-1.447.922-2.733 2.293-3.197l.237-.08a.63.63 0 0 0 .422-.531l.227-2.318a.63.63 0 0 0-.206-.528z"
  }, undefined, false, undefined, this)
};
var pinIcon = createIcon("pin", iconDefinition);
export {
  pinIcon,
  iconDefinition
};
