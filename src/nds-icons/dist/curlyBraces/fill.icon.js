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

// src/nds-icons/src/curlyBraces/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.154 3.875h1.23a.875.875 0 1 0 0-1.75h-1.23A2.875 2.875 0 0 0 4.279 5v2.069c0 .805-.455 1.54-1.175 1.9l-.316.159a.975.975 0 0 0 0 1.744l.316.158a2.13 2.13 0 0 1 1.175 1.901V15a2.875 2.875 0 0 0 2.875 2.875h1.23a.875.875 0 0 0 0-1.75h-1.23A1.125 1.125 0 0 1 6.029 15v-2.069c0-1.14-.501-2.205-1.34-2.931a3.88 3.88 0 0 0 1.34-2.931V5c0-.621.503-1.125 1.125-1.125m5.692 12.25h-1.23a.875.875 0 1 0 0 1.75h1.23A2.875 2.875 0 0 0 15.721 15v-2.069c0-.805.455-1.54 1.175-1.9l.316-.159a.975.975 0 0 0 0-1.744l-.316-.158a2.13 2.13 0 0 1-1.175-1.901V5a2.875 2.875 0 0 0-2.875-2.875h-1.23a.875.875 0 1 0 0 1.75h1.23c.621 0 1.125.504 1.125 1.125v2.069c0 1.14.501 2.205 1.34 2.931a3.88 3.88 0 0 0-1.34 2.931V15c0 .621-.504 1.125-1.125 1.125"
  }, undefined, false, undefined, this)
};
var curlyBracesFillIcon = createIcon("curlyBracesFill", iconDefinition);
export {
  iconDefinition,
  curlyBracesFillIcon
};
