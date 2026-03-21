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

// src/nds-icons/src/present/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.625 4.535a2.765 2.765 0 0 1 3.307-2.711l.07.014a3.26 3.26 0 0 1 2.01 1.297c.481-.66 1.2-1.14 2.044-1.309 1.706-.34 3.319.96 3.319 2.71 0 .558-.166 1.079-.451 1.514h.776c.87 0 1.575.705 1.575 1.575v1.9c0 .613-.35 1.144-.86 1.404V15.7c0 .87-.706 1.575-1.576 1.575H5.161c-.87 0-1.575-.705-1.575-1.575v-4.77a1.58 1.58 0 0 1-.861-1.405v-1.9c0-.87.705-1.575 1.575-1.575h.777a2.75 2.75 0 0 1-.452-1.515m6 2.765v2.55H15.7c.18 0 .325-.145.325-.325v-1.9A.325.325 0 0 0 15.7 7.3zm-1.25 0H4.3a.325.325 0 0 0-.325.325v1.9c0 .18.145.325.325.325h5.075zm0-1.25V5.038c0-.96-.677-1.786-1.618-1.974l-.07-.014a1.515 1.515 0 1 0-.297 3zm3.25 0c.83-.008 1.5-.683 1.5-1.515 0-.95-.882-1.671-1.824-1.483a2.084 2.084 0 0 0-1.676 2.035v.963zm-2 5.05v4.925h4.214c.18 0 .325-.145.325-.325v-4.6zm-1.25 0h-4.54v4.6c0 .18.146.325.326.325h4.214z"
  }, undefined, false, undefined, this)
};
var presentIcon = createIcon("present", iconDefinition);
export {
  presentIcon,
  iconDefinition
};
