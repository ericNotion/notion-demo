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

// src/nds-icons/src/eyeglasses/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.646 8.37c0 1.655-1.262 2.996-2.819 2.996s-2.82-1.34-2.82-2.995q0-.13.01-.257h-.36a.625.625 0 1 1 0-1.25h.704l.028.001c.489-.891 1.397-1.49 2.438-1.49.954 0 1.797.503 2.307 1.273a2.14 2.14 0 0 1 1.73 0c.51-.77 1.353-1.273 2.307-1.273 1.04 0 1.95.599 2.438 1.49h.735a.625.625 0 0 1 0 1.25h-.364q.01.127.01.256c0 1.654-1.262 2.995-2.82 2.995-1.556 0-2.819-1.34-2.819-2.995q0-.288.05-.56a.89.89 0 0 0-.804 0q.05.272.05.56m-1.5 0c0-.912-.675-1.495-1.319-1.495s-1.32.583-1.32 1.496.676 1.495 1.32 1.495 1.32-.582 1.32-1.495m6.344 0c0-.912-.675-1.495-1.32-1.495-.643 0-1.319.583-1.319 1.496s.675 1.495 1.32 1.495c.644 0 1.32-.582 1.32-1.495"
  }, undefined, false, undefined, this)
};
var eyeglassesFillSmallIcon = createIcon("eyeglassesFillSmall", iconDefinition);
export {
  iconDefinition,
  eyeglassesFillSmallIcon
};
