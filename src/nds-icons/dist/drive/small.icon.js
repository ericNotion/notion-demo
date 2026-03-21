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

// src/nds-icons/src/drive/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.287 9.564a.575.575 0 0 0-.575.575v1.07a.575.575 0 1 0 1.15 0v-1.07a.575.575 0 0 0-.575-.575m2.139 0a.575.575 0 0 0-.575.575v1.07a.575.575 0 1 0 1.15 0v-1.07a.575.575 0 0 0-.575-.575m2.139 0a.575.575 0 0 0-.575.575v1.07a.575.575 0 0 0 1.15 0v-1.07a.575.575 0 0 0-.575-.575"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.157 2.563a2.375 2.375 0 0 0-2.329 1.909l-1.114 5.571a2 2 0 0 0-.043.429c0 .323.052.635.148.927a2.72 2.72 0 0 0 1.889 1.89c.292.096.605.149.93.149h6.725c.325 0 .639-.053.932-.15a2.72 2.72 0 0 0 1.884-1.882 3 3 0 0 0 .15-.934q0-.217-.043-.429l-1.114-5.571a2.375 2.375 0 0 0-2.329-1.91zM4.054 4.717a1.125 1.125 0 0 1 1.103-.904h5.686c.537 0 .998.378 1.103.904l.693 3.464a2.7 2.7 0 0 0-1.074-.221h-7.13a2.7 2.7 0 0 0-1.074.22zm.381 4.393h7.13c.667 0 1.236.417 1.461 1.006l.035.172q.018.09.018.184c0 .947-.768 1.716-1.716 1.716H4.637a1.716 1.716 0 0 1-1.716-1.716q0-.093.019-.184l.035-.175a1.56 1.56 0 0 1 1.46-1.003"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var driveSmallIcon = createIcon("driveSmall", iconDefinition);
export {
  iconDefinition,
  driveSmallIcon
};
