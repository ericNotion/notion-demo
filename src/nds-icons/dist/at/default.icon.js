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

// src/nds-icons/src/at/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M14.754 4.125a7.625 7.625 0 1 0-2.052 12.964.625.625 0 0 0-.46-1.162 6.376 6.376 0 1 1 3.672-3.83c-.159.457-.654.778-1.278.778a1.28 1.28 0 0 1-1.28-1.28V7.079a.625.625 0 0 0-1.25 0v.214c-.654-.555-1.496-.839-2.383-.839-.969 0-1.878.338-2.546 1-.672.665-1.058 1.614-1.058 2.751s.385 2.098 1.05 2.778c.665.679 1.575 1.04 2.554 1.04s1.893-.36 2.563-1.037q.075-.074.143-.153a2.53 2.53 0 0 0 2.207 1.292c1.01 0 2.081-.533 2.459-1.618a7.625 7.625 0 0 0-2.341-8.382m-7.385 6.08c0-.846.28-1.46.687-1.862.41-.406.99-.639 1.667-.639s1.266.234 1.683.641c.412.404.697 1.018.697 1.86 0 .844-.286 1.478-.704 1.9-.421.425-1.01.669-1.676.669-.667 0-1.247-.243-1.66-.666-.412-.42-.694-1.056-.694-1.903"
  }, undefined, false, undefined, this)
};
var atIcon = createIcon("at", iconDefinition);
export {
  iconDefinition,
  atIcon
};
