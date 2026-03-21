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

// src/nds-icons/src/map/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M13.553 2.858a.54.54 0 0 0-.513-.047L9.75 4.218 6.445 2.805h-.021l-.03-.003H6.39l-.013-.007H6.36a.1.1 0 0 1-.034-.007h-.002c-.017-.005-.043-.013-.074-.013h-.002c-.036 0-.076 0-.125.02l-.025.002a.2.2 0 0 0-.06.015L2.542 4.31a.54.54 0 0 0-.326.499v7.87c0 .187.094.349.242.452.153.106.35.116.513.047l3.29-1.407 3.305 1.413h.021l.015.001.016.002h.002l.013.007h.018c.008 0 .016.002.034.007h.003a.3.3 0 0 0 .073.013h.003c.036 0 .075 0 .124-.02l.026-.002a.2.2 0 0 0 .058-.015l3.498-1.499c.2-.082.326-.28.326-.499V3.31a.55.55 0 0 0-.242-.452m-6.758 7.963V4.134l2.41 1.035v6.687zm-3.5 1.045V5.18l2.41-1.035v6.687zm7 0V5.18l2.41-1.035v6.687z"
  }, undefined, false, undefined, this)
};
var mapSmallIcon = createIcon("mapSmall", iconDefinition);
export {
  mapSmallIcon,
  iconDefinition
};
