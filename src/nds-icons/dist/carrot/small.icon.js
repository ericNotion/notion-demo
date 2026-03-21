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

// src/nds-icons/src/carrot/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M9.065 4.191a3.7 3.7 0 0 1-.087-.802c0-1.185.54-2.146 1.204-2.146.593 0 1.086.765 1.185 1.773.718-.496 1.476-.614 1.853-.237.378.378.26 1.136-.236 1.854 1.008.1 1.773.592 1.773 1.185 0 .665-.96 1.204-2.146 1.204-.284 0-.555-.031-.802-.087a2.71 2.71 0 0 1-1.175 2.955l-7.387 4.682c-1.189.754-2.573-.63-1.82-1.82L6.11 5.367A2.71 2.71 0 0 1 9.065 4.19m.36 1.594a1.456 1.456 0 0 0-2.26.25l-.154.244.895.895a.44.44 0 1 1-.622.623l-.756-.756-.374.59.955.954a.44.44 0 1 1-.623.622l-.814-.815-3.189 5.03a.1.1 0 0 0-.015.032v.01a.1.1 0 0 0 .025.043.1.1 0 0 0 .042.025h.01a.1.1 0 0 0 .033-.015l2.553-1.618-.358-.36a.44.44 0 1 1 .622-.621l.498.498 4.072-2.582c.788-.499.91-1.6.25-2.259z"
  }, undefined, false, undefined, this)
};
var carrotSmallIcon = createIcon("carrotSmall", iconDefinition);
export {
  iconDefinition,
  carrotSmallIcon
};
