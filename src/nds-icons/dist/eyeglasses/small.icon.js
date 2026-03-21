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

// src/nds-icons/src/eyeglasses/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.827 5.3c-1.104 0-2.06.655-2.549 1.615h-.622a.575.575 0 0 0 0 1.15h.29q-.013.15-.013.306c0 1.691 1.291 3.07 2.894 3.07s2.895-1.379 2.895-3.07q0-.33-.064-.642a.94.94 0 0 1 .682 0 3.3 3.3 0 0 0-.063.642c0 1.691 1.291 3.07 2.894 3.07s2.895-1.379 2.895-3.07q0-.156-.015-.306h.293a.575.575 0 1 0 0-1.15h-.624c-.488-.96-1.445-1.615-2.549-1.615-1.003 0-1.886.541-2.405 1.36a2.1 2.1 0 0 0-1.534.001c-.519-.82-1.401-1.36-2.405-1.36M3.183 8.37c0-1.072.801-1.82 1.644-1.82s1.645.748 1.645 1.82c0 1.074-.802 1.821-1.645 1.821s-1.644-.747-1.644-1.82m6.344 0c0-1.072.801-1.82 1.644-1.82s1.645.748 1.645 1.82c0 1.074-.802 1.821-1.645 1.821s-1.644-.747-1.644-1.82"
  }, undefined, false, undefined, this)
};
var eyeglassesSmallIcon = createIcon("eyeglassesSmall", iconDefinition);
export {
  iconDefinition,
  eyeglassesSmallIcon
};
