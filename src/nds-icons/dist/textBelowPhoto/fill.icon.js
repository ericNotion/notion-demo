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

// src/nds-icons/src/textBelowPhoto/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M5.088 2.45A1.89 1.89 0 0 0 3.2 4.338v6.689c0 1.042.845 1.887 1.888 1.887h9.81a1.89 1.89 0 0 0 1.888-1.887v-6.69a1.89 1.89 0 0 0-1.888-1.887zm7.292 3.505a.625.625 0 0 1 .884 0l2.422 2.421v2.65a.79.79 0 0 1-.788.788h-9.81a.79.79 0 0 1-.788-.787V9.66l1.757-1.757a.625.625 0 0 1 .884 0l1.746 1.745zM8.656 4.39c.202 0 .394.044.567.124a.988.988 0 0 0 .634 1.859 1.355 1.355 0 1 1-1.2-1.983M3.2 17a.55.55 0 0 1 .55-.55h7.1a.55.55 0 0 1 0 1.1h-7.1A.55.55 0 0 1 3.2 17m.55-2.868a.55.55 0 0 0 0 1.1h10.5a.55.55 0 0 0 0-1.1z"
  }, undefined, false, undefined, this)
};
var textBelowPhotoFillIcon = createIcon("textBelowPhotoFill", iconDefinition);
export {
  textBelowPhotoFillIcon,
  iconDefinition
};
